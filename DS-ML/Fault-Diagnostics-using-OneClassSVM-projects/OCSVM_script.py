# -*- coding: utf-8 -*-
"""
Created on Sun Dec  2 19:46:54 2018

"""

#""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
#""" IMPORTING LIBRARIES FOR THE RUN """
#""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
""" python libraries """
import matplotlib	
matplotlib.use('Qt4Agg')
import matplotlib.pyplot as plt
import pandas as pd

""" own libraries """
import OCSVM_lib as svm

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

options                              = {}

options['No_of_Sensors']             = 5

options['finfo']                     = {}
options['finfo']['pname']            = 'C:/Users/subashnirmal/Desktop/MTP/'
options['finfo']['fname']            = 'Quality_final.csv'
options['finfo']['timestampformat']  = 'dd-mmm-yyyy'
options['finfo']['savelogfile']      = True
options['finfo']['onscreendisplay']  = True

options['Eventlog']                  = {}
options['Eventlog']['No_of_events']  = 4
options['Eventlog']['Errortype']     = 'None'
options['Eventlog']['DropEvent']     = False
options['Eventlog']['DropEventNo']   = 2

options['n_rln_min']                 = 15													#time_duration for resolution
options['n_hrs']                     = 20
options['steps']                     = (options['n_hrs']*60)/(options['n_rln_min'])


options['OCSVM']                     = {}
options['OCSVM']['nu']               = 0.1
options['OCSVM']['kernel']           = 'rbf'
options['OCSVM']['gamma'] 			 = 0.1
options['train_hrs']                 = 15

#""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
#""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

#READ DATA
rawdata = svm.func_dataread(options)
rawdata = pd.DataFrame(rawdata)
rawdata = rawdata.iloc[:,1:]
rawdata.columns = rawdata.iloc[0]
rawdata = rawdata.iloc[1:,:]
print (rawdata.iloc[:,1:].head())
options['sensors_list'] = rawdata.columns.values[[i for i in range(len(rawdata.columns.values)-1) if i%2!=0]].tolist()

#STANDARDIZED DATA LIST OF ALL EVENTS
xx = svm.func_extract_eventsdata(data=rawdata, options= options, hrs=options['n_hrs'], std=True)

#PLOT OF ALL TRAINING DATA OF EVENTS
svm.func_plotValuesBfrFail(xx, options)

# Feature Generation
svm_features=svm.generate_features(xx,options)                          

# Feature Plots
svm.fun_plot_features(svm_features,options)

# OCSVM Code
output_data=svm.train_OCSVM(svm_features,options)

svm.plot_output_OCSVM(output_data,options)

svm.test_on_data(rawdata,svm_features,options)