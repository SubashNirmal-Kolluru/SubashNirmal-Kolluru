using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyManager : MonoBehaviour
{
    public static EnemyManager instance;
    [SerializeField] private GameObject zombie_prefab;
    public Transform[] zombie_spawnpoints;
    [SerializeField] private int zombie_count;
    private int init_count;
    public float wait_time = 10f;
    
    void Awake(){ MakeInstance();}
    // Start is called before the first frame update
    void Start(){
        init_count = zombie_count;
        spawn_zombies();
        StartCoroutine("CheckSpawn");
    }
    // Update is called once per frame
    // void Update(){}

    void MakeInstance(){if(instance == null) instance = this;}

    void spawn_zombies(){
        int ind = 0;
        for(int i=0; i<zombie_count; i++){
            if(ind >= zombie_spawnpoints.Length) ind = 0;
            Instantiate(zombie_prefab, zombie_spawnpoints[ind].position, Quaternion.identity);
            ind++;
        }
        zombie_count = 0;
    }
    IEnumerator CheckSpawn(){
        yield return new WaitForSeconds(wait_time);
        spawn_zombies();
        StartCoroutine("CheckSpawn");   
    }

    public void enemydie(){
        zombie_count++;
        if(zombie_count > init_count) zombie_count = init_count;
    }

    public void StopSpawn(){StopCoroutine("CheckSpawn");}
}
