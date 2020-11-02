namespace PPC_Api.Modules
{
    public class LeaderBord
    {
        

        public string UserName { get; set; }
        // public int WinRatio { get; set; }
        // public int NumOfturn { get; set; }

        public LeaderBord(){}
        public LeaderBord(string userName) // int winRatio, int numOfturn
        {
            UserName = userName;
            // WinRatio = winRatio;
            // NumOfturn = numOfturn;
        }


        // static public winrationresult(){

        //     this.WinRatio =  win / this.numOfturn
        // }
    }
}