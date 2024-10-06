#!/usr/bin/env python
# coding: utf-8

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
'''One-Class Support Vector Machine'''
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
'''We are training the OCSVM by taking dataset 20 hrs before the occurence of 
failure. Data before failure which is first standardized then features are 
generated.Feaures generated based on our intuition : Mean, Peak, Standard 
Deviation, Energy(mean of sum squares). Feaures generated based on physical 
properties of machine(which are given in doc) :
𝐹𝑒𝑎𝑡𝑢𝑟𝑒_1=   ln⁡[((𝑠𝑒𝑛𝑠𝑜𝑟_3)/(𝑠𝑒𝑛𝑠𝑜𝑟_1 ))]/ln⁡[((𝑠𝑒𝑛𝑠𝑜𝑟_4)/(𝑠𝑒𝑛𝑠𝑜𝑟_2 ))] 
𝐹𝑒𝑎𝑡𝑢𝑟𝑒_2=  [𝑠𝑒𝑛𝑠𝑜𝑟_3]/[𝑠𝑒𝑛𝑠𝑜𝑟_4] '''
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

#%%
'''Importing Libraries''' 
import numpy as np
import pandas as pd         
import datetime
import os
import pathlib
import csv

from sklearn.preprocessing import MinMaxScaler
from matplotlib import cm, pyplot as plt
from sklearn import svm

#get_ipython().magic('matplotlib inline')
#%%
'''Functions definitions'''

## Function to extract events from EventLog File
# Input: EventLog File, Failure type(None/Error), no. of events required
# Return: events start & end times for given type
def get_events(event_log, fail_type, n_events):
    events = event_log.loc[event_log.Type == fail_type, ["Start","End"]]
    events = events.reset_index(drop=True)
    events.Start = pd.to_datetime(events.Start, errors='coerce')
    events.End = pd.to_datetime(events.End, errors='coerce')
    strtfrm = 1
    toReturn = events.iloc[strtfrm:(strtfrm+n_events),:]
    toReturn = toReturn.reset_index(drop=True)
    return toReturn

#%%

def func_readcsvfilelocal(fullfile):
    f_open = open(fullfile)
    csv_f  = csv.reader(f_open, delimiter=',')
    data   = list(csv_f)
    data   = np.array(data)
    f_open.close()
    return data

#%%

def func_savetxtfile(inp,str1):

    pname    = inp['pname']
    fname    = inp['fname']
    try:
        savetext = inp['save']
    except:
        savetext=True
        pass
    try:
        optype   = inp['optype']
    except:
        optype = 'a'
        pass
    try:
        onscreendisplay = inp['onscreendisplay']
    except:
        onscreendisplay=False
        pass
    
    if savetext==True:
        fullfile = func_createfile(pname,fname)
    
        file=open(fullfile,optype)
        file.write(str1)
        #inroder to write on the next line this code can be used 
        file.write("\n")
        file.close()
    
    if onscreendisplay == True:
        print(str1)

    return

#%%

def func_createfile(pname,fname,extn='.txt'):
    #    from os.path import expanduser
    #    home = expanduser("~")
        
    fullfile = pname+'\\'+fname+extn
    if os.path.exists(pname)==False:
        pathlib.Path(pname).mkdir(parents=True, exist_ok=True)
    return (fullfile)

#%%

def func_getspecificfileextn(fullpath,fextn):
    flist   = os.listdir(fullpath)
    arr_txt = [x for x in flist if x.endswith(fextn)]    
    return arr_txt

#%%

def func_getarraydim(arr):
    nrows   = 0
    ncols   = 0
    arr_dim = np.shape(arr)
    
    if len(arr_dim)==1:
        if arr_dim[0]!=0:
            nrows = arr_dim[0]
            ncols = 1
    else:
        if len(arr_dim)!=0:
            try:
                if min(arr_dim)!=0:
                    nrows = arr_dim[0]
                    ncols = arr_dim[1]
            except:
                nrows = 1
                ncols = 1
                pass
        else:
            if isinstance(arr,str)==True:
                if len(arr)==0:
                    nrows = 0
                    ncols = 0
                else:
                    nrows = 1
                    ncols = 1
            elif isinstance(arr,int)==True or isinstance(arr,float)==True:
                nrows = 1
                ncols = 1
                
    vecmindim = min([nrows,ncols]) 
    vecmaxdim = max([nrows,ncols])
       
    return (nrows,ncols,vecmindim,vecmaxdim)

#%%
## For splitting file name and extension
def func_checkfileextn(fname,comfextn):
    
    if fname.find(".")!=-1:
        fname1,fextn = fname.split(".")
    else:
        fname1 = fname
        if comfextn.find(".")==-1:
            fextn = comfextn
        else:
            xxx,fextn = comfextn.split(".")
        
    return (fname1,fextn)

#%%
## Function to create a log file 
def func_logfileinfo(pname, fname, logfilesave=True, onscreendisplay=True, dellogfile=False):
    
    fname1,extn1 = func_checkfileextn(fname,fname) # To get filename & extension separately
    fnameLOG = fname1+'_LOGFILE'#+'.txt'

    logfileinfo                    = {}
    logfileinfo['save']            = logfilesave
    logfileinfo['pname']           = pname
    logfileinfo['fname']           = fnameLOG
    logfileinfo['onscreendisplay'] = onscreendisplay

    try:
        if dellogfile==True:
            os.remove(pname+'\\'+fnameLOG+'.txt')
    except:
        pass
    return logfileinfo

#%%
## Function to import rawdata 
def func_dataread(options):
    path = options['finfo']['pname']
    filename = options['finfo']['fname']
    savelogfile = options['finfo']['savelogfile']
    onscreendisplay = options['finfo']['onscreendisplay']
    logfileinfo = func_logfileinfo(path,filename,savelogfile,onscreendisplay,True) 
    
    LF_str = '================================================================================'
    func_savetxtfile(logfileinfo,LF_str)
    
    now0    = datetime.datetime.now()
    isonow0 = now0.isoformat()+'Z'
    LF_str  = 'SIMULATION START TIMESTAMP [yyyy-mm-ddThh:mi:ssZ]: ' + isonow0
    func_savetxtfile(logfileinfo,LF_str)
    
    LF_str = '================================================================================'
    func_savetxtfile(logfileinfo,LF_str)
    
    LF_str = '\nDATA READING'
    func_savetxtfile(logfileinfo,LF_str)
    
    
    filesep  = '\\'
    comfextn = '.csv'

    xxx,xxx,xxx,dimfullpath  = func_getarraydim(path)
    xxx,xxx,xxx,dimfilename  = func_getarraydim(filename)
    
    if dimfilename==0:
        flist    = func_getspecificfileextn(path,comfextn)
        flistnew = []
        for file in flist:
            fname,fextn = func_checkfileextn(file,comfextn)
            flistnew.append(fname)
    else:
        if isinstance(filename,str)==True:
            filename=[filename]
        flistnew = filename
        
    outdata = {}
    outcsv  = {}
    fnum    = 1
    #print('\nFILE NAMES:')
    for i in range(len(filename)):
        file = flistnew[i]

        """ Separate out the file name from the extension """
        fname,fextn = func_checkfileextn(file,comfextn)
        
        LF_str = '     Path: '+path
        func_savetxtfile(logfileinfo,LF_str)
        
        LF_str = '     File: '+file
        func_savetxtfile(logfileinfo,LF_str)

        fnum+=1
        
        """ Read the data file here: either .xlsx or .csv """
        fullfile  = path+filesep+fname+"."+fextn
        print(fullfile)
        if fextn == 'xlsx':
            print('\nCannot read from XL files for now. Coming soon.')
        elif fextn == 'csv':
            data_i        = func_readcsvfilelocal(fullfile)
            #outcsv[fname] = func_extractcsvfiledata(data_i,options)
            outcsv[fname] = data_i
            
    outdata = outcsv[fname]
    return outdata

#%%
## Functionn for Standardization of the data
# Input: dataframe to be standardised
'''The StandardScaler assumes your data is normally distributed within each feature and will scale them such that
   the distribution is now centred around 0, with a standard deviation of 1.'''
# NOTE: Do not pass data that has string columns or any object type [ErrorType column is though taken care off]
def stdscaler(data,nsensors):
    from sklearn.preprocessing import StandardScaler
    sc = StandardScaler()
    # To remove Nan/empty values, If any
    data.fillna(method = 'ffill' , inplace=True) 
    data.fillna(method = 'bfill', inplace=True)
    
    #s= []
    cols = []
    for i in range(1,2*nsensors+1,2):
        #s.append(data.iloc[:,i])
        cols.append(data.columns[i])
        
    std_data = sc.fit_transform(data[cols])
    x = pd.DataFrame(std_data)
    
    return x

#%%
## Function to extract particuar time period data  
# Input: Data, start tmp, end tmp, no. of sensors
# Return: data for period of time provided 

def extract_data(data, start_tmp, end_tmp, no_sensors, keepErrorCol = False):
    
    data.timestamp = pd.to_datetime(data.timestamp)
    ext_data = data.loc[np.logical_and(data.timestamp >= start_tmp, data.timestamp < end_tmp), :]
    
    if keepErrorCol == False:
        ext_data = ext_data.iloc[:, 0:(2*no_sensors)+1]
    else:
        ext_data = ext_data.iloc[:, 0:(2*no_sensors)+2]
        
    return ext_data    

#%%
## Function to import EventLog File and find events
def func_eventlog(options):
    
    event_log = pd.read_csv(options['finfo']['pname'] +"EventData.csv", header= 2)
    tevents = get_events(event_log=event_log, fail_type=options['Eventlog']['Errortype'], n_events= options['Eventlog']['No_of_events'])
    #print(tevents)
    
    if options['Eventlog']['DropEvent'] == True:
        evtno = options['Eventlog']['DropEventNo']
        tevents = tevents.drop(tevents.index[evtno-1])
        tevents = tevents.reset_index(drop=True)
        options['Eventlog']['No_of_events'] -= 1
    
    return tevents

#%%
# Function to return list of list for different tevents
def func_extract_eventsdata(data, options, fromstep=16, tostep=0, hrs=-99, std = True):
    
    tevents = func_eventlog(options)
    n_events = options['Eventlog']['No_of_events']
    n_rln = options['n_rln_min']
    Eventdata = []
    FEventdata = []
    
    if hrs==-99:
        for i in range(0,n_events):
            st = tevents.Start[i] - n_rln*(pd.to_timedelta(fromstep, unit = 'm')) 
            et = tevents.Start[i] - n_rln*(pd.to_timedelta(tostep, unit = 'm')) 
            if std == True:
                Eventdata.append(extract_data(data=data, start_tmp=st, end_tmp= et, no_sensors=options['No_of_Sensors']))
                FEventdata.append(stdscaler(data = Eventdata[i], nsensors=options['No_of_Sensors']))
            else:
                FEventdata.append(extract_data(data=data, start_tmp=st, end_tmp= et, no_sensors=options['No_of_Sensors']))
    else:
        for i in range(0,n_events):
            st = tevents.Start[i] - (pd.to_timedelta(hrs, unit = 'h')) 
            et = tevents.Start[i] - (pd.to_timedelta(0, unit = 'h'))
            if std == True:
                Eventdata.append(extract_data(data=data, start_tmp=st, end_tmp= et, no_sensors=options['No_of_Sensors']))
                FEventdata.append(stdscaler(data = Eventdata[i], nsensors=options['No_of_Sensors']))
            else:
                FEventdata.append(extract_data(data=data, start_tmp=st, end_tmp= et, no_sensors=options['No_of_Sensors']))
            
    return FEventdata

# In[321]:
def func_plotValuesBfrFail(data, options):
    
    clr = ['b','r','g','y','k','b','c','m']
    ne = options['Eventlog']['No_of_events']
    ns = options['No_of_Sensors']
    # For events i=1 to 4 and all sensors
    for i in range(0,ne):
        fig = plt.figure(figsize=(16, 5), dpi= 60, facecolor='w', edgecolor='k')
        # For sensor s
        for s in range(0,ns):
            plt.plot(data[i].iloc[:,s], '-'+clr[s], label = options['sensors_list'][s])#'Sensor'+str(s+1))
        plt.axvline(x=options['n_hrs']*60, color='k', linestyle='-', label = 'Event Starts')
        plt.xlabel('Time->')
        plt.ylabel('Sensor Value for Event '+ str(i+1))
        plt.title(' [Event]-'+ str(i+1))
        plt.legend()

    #plt.tight_layout()
    plt.show()
    
#%%

def generate_features(data1,options):

    print("")
    print ("___________________________________________Generating Features____________________________________________________")
    time_duration=options['n_rln_min']
    if type(data1)==list:
        data1=pd.concat(data1)
    df_mean=pd.DataFrame()
    df_peak=pd.DataFrame()
    df_std=pd.DataFrame()
    df_energy=pd.DataFrame()
    feature1=[np.log(np.abs(data1.iloc[i,2]/data1.iloc[i,0]))/np.log(np.abs(data1.iloc[i,3]/data1.iloc[i,1])) for i in range(data1.shape[0])]
    feature2=[data1.iloc[i,2]/data1.iloc[i,3] for i in range(data1.shape[0])]
    feature1_mean=[np.mean(feature1[time_duration*j:time_duration*(j+1)]) for j in range(int (len(feature1)/time_duration))]
    feature2_mean=[np.mean(feature2[time_duration*j:time_duration*(j+1)]) for j in range(int (len(feature2)/time_duration))]
    for i in range(0,data1.shape[1]):
        data=data1.iloc[:,i].tolist()
        list_mean=[np.mean(data[time_duration*j:time_duration*(j+1)]) for j in range(int(len(data)/time_duration))]
        list_energy=[np.sum(np.square(data[time_duration*j:time_duration*(j+1)])) for j in range(int(len(data)/time_duration))]
        list_peak=[max(data[time_duration*j:time_duration*(j+1)]) for j in range(int(len(data)/time_duration))]
        list_std=[np.std(data[time_duration*j:time_duration*(j+1)]) for j in range(int(len(data)/time_duration))]
        df_mean=pd.concat([df_mean.reset_index(drop=True),pd.DataFrame({'sensor'+str(i+1)+'_mean':list_mean})],axis=1)
        df_energy=pd.concat([df_energy.reset_index(drop=True),pd.DataFrame({'sensor'+str(i+1)+'_energy':list_energy})],axis=1)
        df_peak=pd.concat([df_peak.reset_index(drop=True),pd.DataFrame({'sensor'+str(i+1)+'_peak':list_peak})],axis=1)
        df_std=pd.concat([df_std.reset_index(drop=True),pd.DataFrame({'sensor'+str(i+1)+'_std':list_std})],axis=1)
    df_final1=pd.concat([df_mean,df_peak,df_energy,df_std,pd.DataFrame({'feature1':feature1_mean}),pd.DataFrame({'feature2':feature2_mean})],axis=1)
    df_final1.replace([np.inf, -np.inf], 10000,inplace=True)
    df_final1.replace([np.nan], 0,inplace=True)
    df_final = pd.DataFrame(MinMaxScaler().fit_transform(df_final1))
    print ("Number of features generated = "+str(df_final.shape[1]))
    print ("___________________________________________Features Generated_____________________________________________________")
    print ("")
    return df_final

#%%

def plot_(data,options,feature_name,event_number,testing):

    clr = ['b','r','g','y','k','b','c','m']
    n_sensors=options['No_of_Sensors']
    fig = plt.figure(figsize=(16, 5), dpi= 60, facecolor='w', edgecolor='k')
    # For each sensor s
    for s in range(0,n_sensors):
        plt.plot(data.iloc[:,s], '-'+clr[s], label = options['sensors_list'][s])#'Sensor'+str(s+1))
    if not testing:
        plt.axvline(x=options['steps'], color='k', linestyle='-', label = 'Event Starts')
    plt.xlabel('Time->')
    plt.ylabel('Sensor Value for Event '+ str(event_number))
    plt.title(' feature='+feature_name+' & Event='+ str(event_number))
    plt.legend()
    plt.show()

#%%

def plot_features(data,options,feature_name,event_number,testing):

    clr = ['b','r','g','y','k','b','c','m']
    n_sensors=options['No_of_Sensors']
    fig = plt.figure(figsize=(16, 5), dpi= 60, facecolor='w', edgecolor='k')
    # For each sensor s
    plt.plot(data, '-'+clr[0], label = feature_name)
    if not testing:
        plt.axvline(x=options['steps'], color='k', linestyle='-', label = 'Event Starts')
    plt.xlabel('Time->')
    plt.ylabel('Sensor Value for Event '+ str(event_number))
    plt.title(' feature='+feature_name+' & Event='+ str(event_number))
    plt.legend()
    plt.show()

#%%

def _plot_features(data,options,events,testing=False):

    print("plotting all features")
    for i in range(events):
        data_events=data.iloc[[j for j in range(data.shape[0]) if int(j/options['steps'])==i]]
        data_events.index=[j for j in range(0,data_events.shape[0])]
        '''for MEAN''' 
        plot_(data_events.iloc[:,0:5],options,'Mean',i+1,testing)
        '''for energy''' 
        plot_(data_events.iloc[:,5:10],options,'Energy',i+1,testing)
        '''for peak''' 
        plot_(data_events.iloc[:,10:15],options,'Peak',i+1,testing)
        '''for standard deviation''' 
        plot_(data_events.iloc[:,15:20],options,'Standard Deviation',i+1,testing)
        '''for standard deviation''' 
        plot_features(data_events.iloc[:,20],options,'Feature1',i+1,testing)
        '''for standard deviation''' 
        plot_features(data_events.iloc[:,21],options,'Feature2',i+1,testing)

#%%

def fun_plot_features(data,options):

    events=options['Eventlog']['No_of_events']
    _plot_features(data,options,events)

#%%

def train_OCSVM(data1,options):

    train_hrs=options['train_hrs']
    test_hrs=options['n_hrs']-train_hrs
    interval=options['steps']
    n_events=options['Eventlog']['No_of_events']
    clf = svm.OneClassSVM(nu=options['OCSVM']['nu'] , kernel=options['OCSVM']['kernel'] , gamma=options['OCSVM']['gamma'] )
    train_data=data1.iloc[[i for i in range(data1.shape[0]) if (0<=(i%(interval))<interval*train_hrs/(train_hrs+test_hrs))],:]
    test_data=data1.iloc[[i for i in range(data1.shape[0]) if (interval*train_hrs/(train_hrs+test_hrs)<=(i%(interval))<interval)],:]
    df1=pd.DataFrame({'time1':[i/4.0 for i in range(test_hrs*4,0,-1)]})
    clf.fit(train_data)
    #df12=pd.DataFrame({'time1':[i/4.0 for i in range(time_bfr_failure*4,0,-1)]})
    #y_pred_train = clf.predict(train_data)
    #df12=pd.concat([df12,pd.DataFrame({'train_output':y_pred_train})],axis=1)
    y_pred_test = clf.predict(test_data)
    for i in range(n_events):
        df1=pd.concat([df1,pd.DataFrame({'test_output':y_pred_test[int(i*test_hrs*60/(options['n_rln_min'])):int((i+1)*test_hrs*60/(options['n_rln_min']))]})],axis=1)
    return df1

#%%

def plot_out_OCSVM(data1,options,event_no):    

    plt.plot(pd.DataFrame(data1).reset_index(drop=True))
    plt.xlabel('TimeStamp')
    plt.ylabel('class')
    plt.xticks(np.arange(0, options['n_hrs'], 60/(options['n_rln_min'])))
    plt.title('Test_case=Event'+str(event_no))
    plt.show()

#%%

def plot_output_OCSVM(data1,options):    

    for i in range(1,options['Eventlog']['No_of_events']+1):
        plot_out_OCSVM(data1.iloc[:,i],options,i)

#%%

################################################### ONLY FOR VERIFICATION #################################################

#%%

def model_gen(data1,options):

    train_hrs=options['train_hrs']
    test_hrs=options['n_hrs']-train_hrs
    interval=options['steps']
    n_events=options['Eventlog']['No_of_events']
    clf = svm.OneClassSVM(nu=options['OCSVM']['nu'] , kernel=options['OCSVM']['kernel'] , gamma=options['OCSVM']['gamma'] )
    train_data=data1.iloc[[i for i in range(data1.shape[0]) if (0<=(i%(interval))<interval*train_hrs/(train_hrs+test_hrs))],:]
    return clf.fit(train_data)

#%%

def test_on_data(data_total,data1,options):

    random_no=[np.random.rand(),np.random.rand(),np.random.rand()]
    random_selection=[i*data_total.shape[0] for i in random_no]
    svm_model=model_gen(data1,options)
    data=data_total
    data.timestamp = pd.to_datetime(data.timestamp)
    n_hrs_extract=options['n_hrs'] - options['train_hrs']
    for i in random_selection:
        f_data=extract_data(data_total,data.iloc[int(i),0],data.iloc[int(i)+n_hrs_extract*60,0],options['No_of_Sensors'])
        f_data=stdscaler(f_data,options['No_of_Sensors'])
        gen_data=generate_features(f_data,options)
        _plot_features(gen_data,options,events=1,testing=True)
        y_pred_test = svm_model.predict(gen_data)
        plot_out_OCSVM(y_pred_test,options,event_no=0)

#%%
