using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Models;
using Persistence;

namespace BusinessLogic.Classgroups
{
    public class Edit
    {



        public class Command : IRequest
        {
            public Classgroup Classgroup { get; set; }
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
                var classgroup = await context.Classgroups.FindAsync(request.Classgroup.GroupId);

                mapper.Map(request.Classgroup, classgroup);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }

    }
}