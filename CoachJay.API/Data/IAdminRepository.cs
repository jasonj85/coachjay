using System.Collections.Generic;
using System.Threading.Tasks;
using CoachJay.API.Models;

namespace CoachJay.API.Data
{
    public interface IAdminRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll(); 
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
        Task<Photo> GetPhoto(int id);
        Task<Photo> GetMainPhotoForUser(int userId);
    }
}