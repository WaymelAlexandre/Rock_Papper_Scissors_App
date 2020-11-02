namespace PPC_Api.Modules
{
    public class PlayerNameModel
    {
         public string UserName { get; set; }

        public PlayerNameModel(string userName)
        {
            UserName = userName;
        }
        public PlayerNameModel(){}
        
    }
}