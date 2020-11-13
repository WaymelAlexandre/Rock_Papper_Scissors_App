using Microsoft.AspNetCore.Mvc;
using PPC_Api.Modules;
using System.Collections.Generic;


namespace PPC_Api.Controllers
{
    
    [ApiController]
    [Route("api/Selection")]
    
    
    public class SelectionController : ControllerBase
    {

        
        public static List<InfoPlayer> listofplayer = new List<InfoPlayer>();





        
        [HttpPost("submit")]
        public GameResult SumitVote( [FromBody] GameResult model){


            return new GameResult( model.PlayerChoice, model.UserName); 
        }




        [HttpGet("leader")]
        public LeaderBorde Sumitleaderboder( [FromBody] InfoPlayer lead)
        {

            listofplayer.Add(new InfoPlayer(lead.UserName, lead.Numbrewin, lead.NumOfGame));

            return new LeaderBorde(listofplayer);  
            
        }
    }
}

