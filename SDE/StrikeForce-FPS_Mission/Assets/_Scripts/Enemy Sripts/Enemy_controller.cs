using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public enum Enemy_state{ PATROL, CHASE, ATTACK}

public class Enemy_controller : MonoBehaviour
{
    private Enemy_animator enemy_anim;
    private NavMeshAgent nav_agent;
    private Enemy_state enemy_state;

    public float walk_speed = 0.5f, run_speed = 4f, chase_distance = 7f;
    private float curr_chase_dist, patrol_timer, attack_timer;
    public float attack_dist = 1f, chase_after_attack_dist = 2f;
    public float patrol_radius_min = 18f, patrol_radius_max = 59f, patrol_this_time =15f, wait_attack = 1.5f;
    public GameObject attack_Lpoint, attack_Rpoint;
    private Transform target;

    void Awake(){
        target = GameObject.FindWithTag(Tags.PLAYER_TAG).transform;
        enemy_anim = GetComponent<Enemy_animator>();
        nav_agent = GetComponent<NavMeshAgent>();
    }

    // Start is called before the first frame update
    void Start(){
        enemy_state = Enemy_state.PATROL;
        attack_timer = wait_attack;
        curr_chase_dist = chase_distance;
        patrol_timer = patrol_this_time;
    }

    // Update is called once per frame
    void Update(){
        if(enemy_state == Enemy_state.PATROL) Patrol();
        if(enemy_state == Enemy_state.CHASE) Chase();
        if(enemy_state == Enemy_state.ATTACK) Attack();
    }

    void turn_on_Lattack(){ attack_Lpoint.SetActive(true);}
    void turn_off_Lattack(){ if(attack_Lpoint.activeInHierarchy) attack_Lpoint.SetActive(false);}
    void turn_on_Rattack(){ attack_Rpoint.SetActive(true);}
    void turn_off_Rattack(){ if(attack_Rpoint.activeInHierarchy) attack_Rpoint.SetActive(false);}
    public Enemy_state EState{get; set;}

    void Patrol(){
        nav_agent.isStopped = false;
        nav_agent.speed = walk_speed;
        patrol_timer += Time.deltaTime;
        if(patrol_timer > patrol_this_time){
            new_destination();
            patrol_timer = 0f;
        }
        if(nav_agent.velocity.sqrMagnitude > 0) enemy_anim.Walk(true);
        else enemy_anim.Walk(false);

        if(Vector3.Distance(transform.position, target.position) < chase_distance){
            enemy_anim.Walk(false);
            enemy_state = Enemy_state.CHASE;
        }
    }

    void Chase(){
        nav_agent.isStopped = false;
        nav_agent.speed = run_speed;
        nav_agent.SetDestination(target.position);
        if(nav_agent.velocity.sqrMagnitude > 0) enemy_anim.Run(true);
        else enemy_anim.Run(false);

        if(Vector3.Distance(transform.position, target.position) < attack_dist){
            enemy_anim.Run(false);
            enemy_anim.Walk(false);
            enemy_state = Enemy_state.ATTACK;
            if(chase_distance != curr_chase_dist) chase_distance = curr_chase_dist;
            else if(Vector3.Distance(transform.position, target.position) > chase_distance){
                enemy_anim.Run(false);
                enemy_state = Enemy_state.PATROL;
                patrol_timer = patrol_this_time;
                if(chase_distance != curr_chase_dist) chase_distance = curr_chase_dist;
            }
        }
    }

    void Attack(){
        nav_agent.velocity = Vector3.zero;
        nav_agent.isStopped = true;
        attack_timer += Time.deltaTime;
        if(attack_timer > wait_attack){
            enemy_anim.Attack();
            attack_timer=0f;
        }
        if(Vector3.Distance(transform.position, target.position) > attack_dist + chase_after_attack_dist) enemy_state = Enemy_state.CHASE;
    }

    void new_destination(){
        float rad = Random.Range(patrol_radius_min, patrol_radius_max);
        Vector3 dir = Random.insideUnitSphere * rad;
        dir += transform.position;
        UnityEngine.AI.NavMeshHit navHit;
        UnityEngine.AI.NavMesh.SamplePosition(dir, out navHit, rad, -1);
        nav_agent.SetDestination(navHit.position);
    }
}
