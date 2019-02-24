using System.Linq;
using AutoMapper;
using CoachJay.API.Dtos;
using CoachJay.API.Models;

namespace CoachJay.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
                .ForMember(dest => dest.PhotoUrl, opt =>
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url)
                );
            CreateMap<User, UserForDetailedDto>()
                .ForMember(dest => dest.PhotoUrl, opt =>
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url)
                );
            CreateMap<Photo, PhotosForDetailedDto>();
        }
    }
}