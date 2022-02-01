using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

using MediatR;

using Microsoft.EntityFrameworkCore;

using Models;

using Persistence;

namespace BusinessLogic.Users {
    public class List {

        public class Query : IRequest<User> {
            public Guid id { get; set; }
            }

        public class Handler : IRequestHandler<Query, User> {

            private readonly SKMSDatabaseContext context;
            public Handler(SKMSDatabaseContext context) {
                this.context = context;

                }
            public async Task<User> Handle(Query request, CancellationToken cancellationToken) {
                return await context.Users.FindAsync(request.id);
                }

            }
        }
    }
