using BonhommePendu.Models;

namespace BonhommePendu.Events
{
    // Un événement à créer peu importe si la lettre est dans le mot ou pas!
    public class GuessedLetterEvent : GameEvent
    {
        public char Letter { get; set; }
        // TODO: Compléter
        public GuessedLetterEvent(GameData gameData, char letter)
        {
            this.Letter = letter;
            gameData.GuessedLetters.Add(letter);
        }
    }
}
