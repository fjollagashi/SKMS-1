using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Models;
using Persistence;

namespace BusinessLogic.Students
{
    public class Edit
    {



        public class Command : IRequest
        {
            public Student Student { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly SKMSDatabaseContext context;
            private readonly IMapper mapper;
            public Handler(SKMSDatabaseContext context, IMapper mapper)
            {
                this.mapper = mapper;
                this.context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                context.Entry(request.Student).State = EntityState.Modified;
                context.Entry(request.Student.StudentNavigation).State = EntityState.Modified;

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }

    }
}