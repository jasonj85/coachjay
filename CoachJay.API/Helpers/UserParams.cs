namespace CoachJay.API.Helpers
{
    public class UserParams
    {
        private const int MaxPageSize = 5;
        public int PageNumber { get; set; } = 1;
        private int pageSize = 5;
        public int PageSize
        {
            get { return pageSize; }
            set { pageSize = (value > MaxPageSize) ? MaxPageSize : value; } 
        }
        
        public int UserId { get; set; }
        public int Age { get; set; }

        public string OrderBy { get; set; }
    }
}