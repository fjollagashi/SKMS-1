using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

using BusinessLogic.AuthHelpers;

using MediatR;

using Microsoft.EntityFrameworkCore;

using Models;

using Persistence;

namespace BusinessLogic.Students {
    public class GetStudentDetails {

        public class Query : IRequest<Student> {
            public Guid id { get; set; }
            }

        public class Handler : IRequestHandler<Query, Student> {
            private readonly SKMSDatabaseContext _context;
            public Handler(SKMSDatabaseContext context) {
                _context = context;
                }

            public async Task<Student> Handle(Query request, CancellationToken cancellationToken) {
                return await _context.Students.Where(s => s.StudentId == request.id)
                    .Include("Grades")
                    .Include("Remarks")
                    .Include("Absences")
                    .Include("Grades.SubjectsTeacher")
                    .Include("Grades.SubjectsTeacher.Subject")
                    .Include("StudentNavigation")
                    .Include("ClassGroupNavigation")
                    .Include("ClassGroupNavigation.HomeroomTeacherNavigation")
                    .Include("ClassGroupNavigation.HomeroomTeacherNavigation.TeacherNavigation")
                    .Include("ClassGroupNavigation.Schedules")
                    .Include("ClassGroupNavigation.Schedules.Periods")
					.Include("ClassGroupNavigation.Schedules.Periods.SubjectsTeacher")
					.Include("ClassGroupNavigation.Schedules.Periods.SubjectsTeacher.Subject")
                    .FirstAsync();

                }
            }
        }
    }
