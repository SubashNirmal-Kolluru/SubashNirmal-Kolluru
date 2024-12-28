using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GetHealth : MonoBehaviour
{
    // public PlayerHealthStamina phs;
    // void OnCollisionEnter(Collision collision){
    //     if(collision.gameObject.CompareTag("Player")){
    //         this.gameObject.SetActive(false);
    //         phs.cur_health = 100f;
    //     }
    // }

    public Health phs;
    void OnCollisionEnter(Collision collision){
        if(collision.gameObject.CompareTag("Player")){
            this.gameObject.SetActive(false);
            phs.GetComponent<Health>().Damage(-100f);
        }
    }
}
