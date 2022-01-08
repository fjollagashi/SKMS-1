using System;
using System.Collections.Generic;

#nullable disable

namespace Models
{
    public partial class User
    {
        public Guid UserId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public Guid? UserAddress { get; set; }
        public string Gender { get; set; }
        public DateTime? Birthday { get; set; }
        public string UserPassword { get; set; }
        public string ProfilePictureUrl { get; set; }

        public virtual Street UserAddressNavigation { get; set; }
        public virtual Administrator Administrator { get; set; }
        public virtual Parent Parent { get; set; }
        public virtual Student Student { get; set; }
        public virtual Teacher Teacher { get; set; }
    }
}
