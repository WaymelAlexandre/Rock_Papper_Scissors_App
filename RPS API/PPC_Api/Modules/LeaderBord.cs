namespace PPC_Api.Modules
{
    public class LeaderBord
    {
        

        public string UserName { get; set; }
        public int WinRatio { get; set; }
        public int NumOfTurn { get; set; }
        public int NumbreWin { get; set; }

        public LeaderBord(string userName, int numOfTurn, int numbreWin)
        {
            this.UserName = userName;
            this.NumOfTurn= numOfTurn;
            this.NumbreWin = numbreWin;
            
  
        }
        public LeaderBord(){}



        
    }
}