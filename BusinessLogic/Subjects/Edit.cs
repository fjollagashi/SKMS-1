using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Models;
using Persistence;

namespace BusinessLogic.Subjects
{
    public class Edit
    {



        public class Command : IRequest
        {
            public Subject Subject { get; set; }
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
                var subject = await context.Subjects.FindAsync(request.Subject.SubjectId);

                mapper.Map(request.Subject, subject);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }

    }
}