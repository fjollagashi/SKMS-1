using MediatR;
using System.Collections.Generic;

using Models;
using System;
using BusinessLogic.AuthHelpers;
using Persistence;
using System.Threading.Tasks;
using System.Threading;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace BusinessLogic.Parents {
    public class GetChildren {
        public class Query : IRequest<List<Student>> {
            public Guid parentId { get; set; }
            }

        public class Handler : IRequestHandler<Query, List<Student>> {
            private readonly SKMSDatabaseContext _context;
            public Handler(SKMSDatabaseContext context) {
                _context = context;
                }

            public async Task<List<Student>> Handle(Query request, CancellationToken cancellationToken) {

                Parent parent = await _context.Parents.Where(pa => pa.ParentId == request.parentId).Include(pa => pa.ParentsStudents).ThenInclude(ps => ps.Student).FirstAsync();

                List<Student> list = new List<Student>();

                foreach (ParentsStudent ps in parent.ParentsStudents) {
                    list.Add(ps.Student);
                    }

                return list;

                }
            }


        }
    }