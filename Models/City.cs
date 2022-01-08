using System;
using System.Collections.Generic;

#nullable disable

namespace Models
{
    public partial class City
    {
        public City()
        {
            InverseMunicipalityNavigation = new HashSet<City>();
            Streets = new HashSet<Street>();
        }

        public Guid CityId { get; set; }
        public string CityName { get; set; }
        public Guid? Municipality { get; set; }

        public virtual City MunicipalityNavigation { get; set; }
        public virtual ICollection<City> InverseMunicipalityNavigation { get; set; }
        public virtual ICollection<Street> Streets { get; set; }
    }
}
