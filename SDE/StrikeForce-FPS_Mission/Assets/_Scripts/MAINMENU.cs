using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MAINMENU : MonoBehaviour
{
    
    public void singleplayer(){
        SceneManager.LoadScene("Nature creation");
    }

    public void quitgame(){
        Application.Quit();
    }

    
}
