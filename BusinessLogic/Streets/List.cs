using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Models;
using Persistence;

namespace BusinessLogic.Streets
{
    public class List
    {
        public class Query : IRequest<List<Street>>
        { }

        public class Handler : IRequestHandler<Query, List<Street>>
        {
            private readonly SKMSDatabaseContext context;
            public Handler(SKMSDatabaseContext context)
            {
                this.context = context;
            }

            public async Task<List<Street>> Handle(Query request, CancellationToken cancellationToken)
            {
                var list = await context.Streets.Include(s => s.CityNavigation).ToListAsync();
                foreach (Street s in list)
                {
                    s.CityNavigation.InverseMunicipalityNavigation = null;
                    s.CityNavigation.Streets = null;
                }
                return list;
            }
        }
    }
}