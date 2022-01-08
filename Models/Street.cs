using System;
using System.Collections.Generic;

#nullable disable

namespace Models
{
    public partial class Street
    {
        public Street()
        {
            Schools = new HashSet<School>();
            Users = new HashSet<User>();
        }

        public Guid StreetId { get; set; }
        public string StreetName { get; set; }
        public Guid? City { get; set; }

        public virtual City CityNavigation { get; set; }
        public virtual ICollection<School> Schools { get; set; }
        public virtual ICollection<User> Users { get; set; }
    }
}
