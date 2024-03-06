﻿using Microsoft.AspNetCore.SignalR;
using SignalR.Services;

namespace SignalR.Hubs
{
    public class PizzaHub : Hub
    {
        private readonly PizzaManager _pizzaManager;

        public PizzaHub(PizzaManager pizzaManager) {
            _pizzaManager = pizzaManager;
        }

        public override async Task OnConnectedAsync()
        {
            await base.OnConnectedAsync();
            _pizzaManager.AddUser();
            await Clients.All.SendAsync("user", _pizzaManager.NbConnectedUsers);
        }

        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            await base.OnConnectedAsync();
            _pizzaManager.RemoveUser();
            await Clients.All.SendAsync("user", _pizzaManager.NbConnectedUsers);
        }

        public async Task SelectChoice(PizzaChoice choice)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, _pizzaManager.GetGroupName(choice));
            await Clients.Caller.SendAsync("pricePizza", _pizzaManager.PIZZA_PRICES[(int)choice]);
            await Clients.Caller.SendAsync("totalPizza", _pizzaManager.NbPizzas[(int)choice]);
            await Clients.Caller.SendAsync("money", _pizzaManager.Money[(int)choice]);
        }

        public async Task UnselectChoice(PizzaChoice choice)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, _pizzaManager.GetGroupName(choice));
        }

        public async Task AddMoney(PizzaChoice choice)
        {
            
            _pizzaManager.IncreaseMoney(choice);
            await Clients.Group(_pizzaManager.GetGroupName(choice)).SendAsync("money", _pizzaManager.Money[(int)choice]);
        }

        public async Task BuyPizza(PizzaChoice choice)
        {
            
            _pizzaManager.BuyPizza(choice);
            
            await Clients.Group(_pizzaManager.GetGroupName(choice)).SendAsync("totalPizza", _pizzaManager.NbPizzas[(int)choice]);
            await Clients.Group(_pizzaManager.GetGroupName(choice)).SendAsync("money", _pizzaManager.Money[(int)choice]);
        }
    }
}
