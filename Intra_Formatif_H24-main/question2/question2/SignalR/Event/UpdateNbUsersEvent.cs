using SignalR.Services;

namespace SignalR.Event
{
    public class UpdateNbUsersEvent
    {
        protected PizzaManager _PizzaManager;
        public UpdateNbUsersEvent( PizzaManager pizza)
        { 
            _PizzaManager = pizza;
            _PizzaManager.AddUser();
            
            
        }
    }
}
