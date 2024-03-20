using BonhommePendu.Models;

namespace BonhommePendu.Events
{
    // Un événement à créer chaque fois qu'un utilisateur essai une "nouvelle" lettre
    public class GuessEvent : GameEvent
    {
        // TODO: Compléter
        public GuessEvent(GameData gameData, char letter) {
            // TODO: Commencez par ICI
                    Events.Add(new GuessedLetterEvent(gameData, letter));
            bool a = false;
            for (int i = 0; i < gameData.Word.Length; i++)
            {
                if(gameData.HasSameLetterAtIndex(letter,i))
                {
                    a = true;
                    Events.Add(new RevealLetterEvent(gameData, letter, i));
                }
            }
            if (!a) 
            {
                Events.Add(new WrongGuessEvent(gameData));
            }

        }
    }
}
