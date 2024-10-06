using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerHealthStamina : MonoBehaviour
{
    public float cur_health, max_health = 100, cur_stamina, max_stamina = 100;
    private float bar_len = Screen.width/4, health_len, stamina_len;
    private PlayerSprintCrouch psc;

    void Awake(){ psc = GetComponent<PlayerSprintCrouch>();}

    // Start is called before the first frame update
    void Start(){
        cur_health = max_health;
        health_len = bar_len;
        cur_stamina = max_stamina;
        stamina_len = bar_len;
    }

    // Update is called once per frame
    void Update(){
        changeHealth(0);
        changeStamina();
    }

    void OnGUI(){
        GUI.Box(new Rect(10, 10, health_len, 20), (int)cur_health + " / " + max_health);
        GUI.Box(new Rect(10, 40, stamina_len, 20), (int)cur_stamina + " / " + max_stamina);
    }

    void changeHealth(int health){
        cur_health += health;
        health_len = bar_len * (cur_health / (float)max_health);
        cur_health = (cur_health + 0.5f * Time.deltaTime > 100) ? 100 : cur_health + 0.5f * Time.deltaTime;
    }

    void changeStamina(){
        if(psc.is_crouch == false && Input.GetKey(KeyCode.LeftShift) && cur_stamina > 0){
            cur_stamina = (cur_stamina - 15 * Time.deltaTime < 0) ? 0 : cur_stamina - 15 * Time.deltaTime;
            stamina_len = bar_len * (cur_stamina / (float)max_stamina);   
        }
        else if (cur_stamina < 100 && (psc.is_crouch == true || ! (Input.GetKey(KeyCode.LeftShift)) || cur_stamina <= 20)){
            cur_stamina = (cur_stamina + 5 * Time.deltaTime > 100) ? 100 : cur_stamina + 5 * Time.deltaTime;
            stamina_len = bar_len * (cur_stamina / (float)max_stamina);   
        }
    }
}
