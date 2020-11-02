using Microsoft.AspNetCore.Mvc;
using PPC_Api.Modules;

namespace PPC_Api.Controllers
{
    
    [ApiController]
    [Route("api/Selection")]
    
    
    public class SelectionController : ControllerBase
    {
        [HttpPost("submit")]
        public GameResult SumitVote( [FromBody] PlayerRequestModel model){
            
            return new GameResult(model.PlayerChoice);  
        }

        [HttpPost("Player")]
        public LeaderBord sendleader( [FromBody] PlayerNameModel model){

            return new LeaderBord(model.UserName);
        }


    }
}








            
            // sent in the play request
            
            // from that play request we can the player's choice (e.g. model.PlayerChoice)

            // run the game logic

            // generate computer choice

            // make comparison between computer and player

            // determine winner

            // return result as a GameResult
