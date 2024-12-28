using System.Collections;
using System.Collections.Generic;
using UnityEngine.AI;
using UnityEngine;

public class Health : MonoBehaviour
{
    private Enemy_controller enemy_con;
    private Enemy_animator enemy_anim;
    private NavMeshAgent nav_agent;
    private PlayerHealthStamina phs;

    public float health= 100f;
    private bool is_dead;
    public bool is_player, is_zombie;

    void Awake(){
        if(is_zombie){
            enemy_anim = GetComponent<Enemy_animator>();
            enemy_con = GetComponent<Enemy_controller>();
            nav_agent = GetComponent<NavMeshAgent>();
        }
        if(is_player) phs = GetComponent<PlayerHealthStamina>();
    }

    // Start is called before the first frame update
    // void Start(){}
    // Update is called once per frame
    // void Update(){}

    public void Damage(float damage){
        if(is_dead) return;
        health -= damage;
        if(is_player) phs.cur_health = Mathf.Min(100f, health);
        if(is_zombie){// guns
            if(enemy_con.EState == Enemy_state.PATROL) enemy_con.chase_distance = 50f;
        }
        if(health <= 0f){Died_player(); is_dead=true;}
    }

    void Died_player(){
        if(is_zombie){
            GetComponent<Animator>().enabled = false;
            GetComponent<BoxCollider>().isTrigger = false;
            GetComponent<Rigidbody>().AddTorque(-transform.forward * 50f);
            enemy_con.enabled = false;
            nav_agent.enabled = false;
            enemy_anim.enabled = false;
        }
        if(is_player){
            GameObject[] enemies = GameObject.FindGameObjectsWithTag(Tags.ENEMY_TAG);
            // for(int i=0; i<enemies.Length; i++) enemies[i].GetComponent<Enemy_controller>().enabled = false;
            GetComponent<LinearMovement>().enabled = false;
            /// WRITE DOWN player attack and weapon/////////////////////////
        }
        if(tag == Tags.PLAYER_TAG) Invoke("RestartGame", 3f);
        else Invoke("TurnoffGameObject", 3f);
    }

    void RestartGame(){ UnityEngine.SceneManagement.SceneManager.LoadScene("Nature creation");}
    void TurnoffGameObject(){ gameObject.SetActive(false);}
}
