using System.ComponentModel.DataAnnotations;

namespace BackgroundService.DTOs
{
    public class GameInfoDTO
    {
        // TODO: Include l'information à propos du nombre de victoire ET le coût d'un multiplier
        public int NbVictoire {get; set;}
        public int Multiplier { get; set;}
    }
}
