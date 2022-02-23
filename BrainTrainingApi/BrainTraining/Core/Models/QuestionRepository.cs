using BrainTraining.Core.Interfaces;
using BrainTraining.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BrainTraining.Core.Models
{
    public class QuestionRepository : IRepository<Question>
    {
        public async Task<IEnumerable<Question>> GetAllAsync()
        {
            return await Task.Run(() => GetAllQuestions());
        }

        private IEnumerable<Question> GetAllQuestions()
        {
            return new List<Question>()
            {
                new Question(1, "2 + 2", 4),
                new Question(2, "1 + 5", 6),
                new Question(3, "8 * 3", 24),
                new Question(4, "6 / 2", 3),
                new Question(5, "10 - 8", 2)
            };
        }
    }
}
