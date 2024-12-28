using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerSprintCrouch : MonoBehaviour
{
    private LinearMovement playerMovement; 
    private PlayerHealthStamina playerHealthStamina;
    public float sprint_speed = 10f, move_speed = 5f, crouch_speed = 2f;
    private Transform look_rotate;
    private float stand_height = 1.6f, crouch_height = 1f;
    public bool is_crouch;

    private PlayerFootsteps player_fs;
    private float sprint_vol = 1f, crouch_vol = 0.08f, walk_vol_min = 0.2f, walk_vol_max = 0.6f;
    private float walk_step_distance = 0.42f, sprint_step_distance = 0.2f, crouch_step_distance = 0.55f;

    void Awake(){
        playerMovement = GetComponent<LinearMovement>();
        look_rotate = transform.GetChild(0);
        playerHealthStamina = GetComponent<PlayerHealthStamina>();
        player_fs = GetComponentInChildren<PlayerFootsteps>();
    }
    // Start is called before the first frame update
    void Start(){
        player_fs.volume_Min = walk_vol_min;
        player_fs.volume_Max = walk_vol_max;
        player_fs.step_distance = walk_step_distance;
        
    }

    // Update is called once per frame
    void Update(){ Sprint(); Crouch();}

    void Sprint(){
        if(Input.GetKey(KeyCode.LeftShift) && is_crouch == false && playerHealthStamina.cur_stamina > 1){
            playerMovement.speed = sprint_speed;
            player_fs.step_distance = sprint_step_distance;
            player_fs.volume_Min = sprint_vol;
            player_fs.volume_Max = sprint_vol;
        }
        if((! Input.GetKey(KeyCode.LeftShift)  || (Input.GetKey(KeyCode.LeftShift) && playerHealthStamina.cur_stamina <= 0)) && is_crouch == false) {
            playerMovement.speed = move_speed;
            player_fs.volume_Min = walk_vol_min;
            player_fs.volume_Max = walk_vol_max;
            player_fs.step_distance = walk_step_distance;
        }
    }

    void Crouch(){
        if(Input.GetKeyDown(KeyCode.C)){
            if(is_crouch){
                look_rotate.localPosition = new Vector3(0f, stand_height, 0f);
                playerMovement.speed = move_speed;
                player_fs.volume_Min = walk_vol_min;
                player_fs.volume_Max = walk_vol_max;
                player_fs.step_distance = walk_step_distance;
                is_crouch = false;
            } else{
                look_rotate.localPosition = new Vector3(0f, crouch_height, 0f);
                playerMovement.speed = crouch_speed;
                player_fs.step_distance = crouch_step_distance;
                player_fs.volume_Min = crouch_vol;
                player_fs.volume_Max = crouch_vol;
                is_crouch = true;
            }
        }
    }
}
