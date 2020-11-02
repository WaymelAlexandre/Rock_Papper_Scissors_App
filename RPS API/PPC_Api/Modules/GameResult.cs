using System;

namespace PPC_Api.Modules
{
    public class GameResult
    {
        public string PlayerChoice { get; set; }
        public string CpuChoice { get; set; }
        public string Result { get; set; }

        public GameResult(){}

        public GameResult(string playerChoice)
        {
            this.PlayerChoice = playerChoice;
            this.CpuChoice = computerPick();
            this.Result = calculWinner();
        }

        static string computerPick()
        {
            Random rand = new Random();
            string[] AiResult = {"Rock", "Paper", "Scissor"};
            int randomChose = rand.Next(0, 2);
            return AiResult[randomChose];
        }
        string  calculWinner(){
            if (this.PlayerChoice == this.CpuChoice)
                { this.Result = "This is a Draw" ;
                return Result ;} 

            else if (   
                this.PlayerChoice == "Rock" && this.CpuChoice == "Scissors" || 
                this.PlayerChoice == "Scissors" && this.CpuChoice == "Paper" ||
                this.PlayerChoice == "Paper" && this.CpuChoice == "Rock")
                {
                    this.Result = " You Win Congradulation "; return Result ;
                } 
            else 
                this.Result = " You loose " ;
                return Result ;
        } 
    }
}