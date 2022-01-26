using AutoMapper;
using Models;

namespace BusinessLogic.Core
{
    public class MappingProfiles : Profile
    {
         public MappingProfiles()
         {
             CreateMap<Curriculum ,Curriculum>();
             CreateMap<Student ,Student>();
             CreateMap<Teacher ,Teacher>();
            CreateMap<Subject ,Subject>();
            CreateMap<Classroom ,Classroom>();
            CreateMap<Classgroup ,Classgroup>();
         }
    }
}