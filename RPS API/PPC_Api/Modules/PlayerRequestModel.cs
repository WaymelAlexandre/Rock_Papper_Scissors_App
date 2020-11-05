namespace PPC_Api.Modules
{
    public class PlayerRequestModel
    {
        public string UserName { get; set; }
        public string PlayerChoice { get; set; }
        public string numbrewin { get; set; }

        public PlayerRequestModel() { }

        public PlayerRequestModel(string userName, string playerChoice, string numbrewin)
        {
            this.UserName = userName;
            this.PlayerChoice = playerChoice;
            this.numbrewin = numbrewin;
        }
    }
}