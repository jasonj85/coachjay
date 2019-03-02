using System;
using Microsoft.AspNetCore.Http;

namespace CoachJay.API.Dtos
{
    public class PhotoForCreationDto
    {
        public string Url { get; set; }
        public IFormFile File { get; set; }
        public string Description { get; set; }
        public System.DateTime DateAdded { get; set; }
        public string PublicId { get; set; }

        public PhotoForCreationDto() {
            DateAdded = DateTime.Now;
        }
    }
}