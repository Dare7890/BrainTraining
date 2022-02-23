namespace BrainTraining.Models
{
    public class Question
    {
        public int Number { get; set; }

        public string Expression { get; set; }

        public int Result { get; set; }

        public Question(int number, string expression, int result)
        {
            Number = number;
            Expression = expression;
            Result = result;
        }
    }
}
