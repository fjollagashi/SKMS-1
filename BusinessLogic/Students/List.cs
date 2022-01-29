using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

using MediatR;

using Microsoft.EntityFrameworkCore;

using Models;

using Persistence;

namespace BusinessLogic.Students
{
    public class List
    {
        public class Query : IRequest<List<Student>> { }

        public class Handler : IRequestHandler<Query, List<Student>>
        {
            private readonly SKMSDatabaseContext context;
            public Handler(SKMSDatabaseContext context)
            {
                this.context = context;
            }

            public async Task<List<Student>> Handle(Query request, CancellationToken cancellationToken)
            {
                List<Student> list = await context.Students
                    .Include(s => s.ClassGroupNavigation)
                    .ThenInclude(cgn => cgn.HomeroomTeacherNavigation)
                    .ThenInclude(htn => htn.TeacherNavigation)
                    .Include(s => s.ParentsStudents)
                    .ThenInclude(ps => ps.Parent)
                    .ThenInclude(ps => ps.ParentNavigation)
                    .Include(s => s.StudentNavigation)
                    .ThenInclude(s => s.UserAddressNavigation)
                    .ThenInclude(s => s.CityNavigation)
                    .ToListAsync();
                foreach (Student s in list)
                {
                    s.ClassGroupNavigation.Students = null;
                    s.StudentNavigation.UserAddressNavigation.CityNavigation.Streets = null;
                    s.StudentNavigation.UserAddressNavigation.Users = null;
                    s.StudentNavigation.ProfilePictureUrl = "https://images.squarespace-cdn.com/content/v1/5c3261f7c3c16a11269fdc7f/1547491729587-OO4OXM19OASQDR8ID9XY/Portraits+square.jpg?format=1000w";
                    foreach (ParentsStudent ps in s.ParentsStudents)
                    {
                        ps.Student = null;
                    }

                }
                return list;
            }
        }
    }
}