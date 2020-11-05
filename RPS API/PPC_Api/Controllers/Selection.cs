using Microsoft.AspNetCore.Mvc;
using PPC_Api.Modules;

namespace PPC_Api.Controllers
{
    
    [ApiController]
    [Route("api/Selection")]
    
    
    public class SelectionController : ControllerBase
    {

        public string[] listplayer ;



        [HttpPost("submit")]
        public GameResult SumitVote( [FromBody] PlayerRequestModel model){
            
            return new GameResult(model.PlayerChoice, model.UserName);  
        }




        // [HttpPost("leaderbordname")]

        // public PlayerNameModel getname([FromBody] PlayerNameModel namemodel){
        //     return new PlayerNameModel(namemodel.UserName);
        // }

        // [HttpGet("leaderbord")]
        // public LeaderBord sendleader( [FromBody] LeaderBord model){

           

        //     return new LeaderBord(model.UserName, model.NumOfTurn, model.NumbreWin );
        // }

        // //(Number of Wins / Total Games Played) × 100


    }
}








            
            // sent in the play request
            
            // from that play request we can the player's choice (e.g. model.PlayerChoice)

            // run the game logic

            // generate computer choice

            // make comparison between computer and player

            // determine winner

            // return result as a GameResult
