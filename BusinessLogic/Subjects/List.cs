using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

using MediatR;

using Microsoft.EntityFrameworkCore;

using Models;

using Persistence;

namespace BusinessLogic.Subjects {
    public class List {
        public class Query : IRequest<List<Subject>> { }

        public class Handler : IRequestHandler<Query, List<Subject>> {
            private readonly SKMSDatabaseContext context;
            public Handler(SKMSDatabaseContext context) {
                this.context = context;
                }

            public async Task<List<Subject>> Handle(Query request, CancellationToken cancellationToken) {
                return await context.Subjects.ToListAsync();
                }
            }
        }
    }