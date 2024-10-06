using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class PauseMenu : MonoBehaviour
{
    public static bool ispaused = false;
    public GameObject pausemenuUI;

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKeyDown(KeyCode.Escape)){
            if(ispaused){
                Resume();
            }

            else{
                Pause();
            }
        }
    }

    public void Resume()
    {
        pausemenuUI.SetActive(false);
        Time.timeScale = 1f;
        ispaused = false;
    }

    void Pause()
    {
        pausemenuUI.SetActive(true);
        Time.timeScale = 0f;
        ispaused = true;
    }

    public void newgame()
    {
        SceneManager.LoadScene("Nature creation");
        Invoke("RestartGame", 0.5f);
    }

    public void quitgame()
    {
        Application.Quit();
    }
}
