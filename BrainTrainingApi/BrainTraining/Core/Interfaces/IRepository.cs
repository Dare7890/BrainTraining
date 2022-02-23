using System.Collections.Generic;
using System.Threading.Tasks;

namespace BrainTraining.Core.Interfaces
{
    public interface IRepository<T>
    {
        Task<IEnumerable<T>> GetAllAsync();
    }
}
