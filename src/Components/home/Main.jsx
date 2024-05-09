import React, { useState } from "react";
import JobCard from "./JobCard";
import Filter from "./Filter.jsx";

const Main = () => {
  const [filteredData, setFilteredData] = useState([
    {
      company: "Apple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      title: "iOS Developer",
      description:
        "Sed eget odio nec justo fringilla pretium ac a diam. Integer ultricies posuere ex, eget consequat justo consequat id.",
      salary: 125000,
      remote: false,
      contract: "Full-time",
    },
    {
      company: "Netflix",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      title: "UI/UX Designer",
      description:
        "Phasellus aliquet nunc nec turpis fermentum, vel condimentum quam rhoncus. Integer nec tortor non magna tincidunt vestibulum.",
      salary: 115000,
      remote: true,
      contract: "Full-time",
    },
    {
      company: "Tesla",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/ba/Tesla_logo.svg",
      title: "Embedded Systems Engineer",
      description:
        "Mauris id ex non lorem sollicitudin tempus vel ac ante. Nulla facilisi. Phasellus aliquet felis vitae ex tempus vestibulum.",
      salary: 130000,
      remote: false,
      contract: "Full-time",
    },
    {
      company: "Twitter",
      image:
        "https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg",
      title: "DevOps Engineer",
      description:
        "Suspendisse potenti. Vivamus aliquet, est in consectetur ullamcorper, augue odio feugiat metus, at pharetra purus libero nec risus.",
      salary: 120000,
      remote: true,
      contract: "Full-time",
    },
    {
      company: "Intel",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/1200px-Intel-logo.svg.png",
      title: "Hardware Engineer",
      description:
        "Fusce eleifend tincidunt mauris eget aliquet. Praesent ut diam nisi. Cras vestibulum nulla ut nisi tincidunt, in suscipit metus ultricies.",
      salary: 135000,
      remote: false,
      contract: "Full-time",
    },
    {
      company: "IBM",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      title: "Cloud Solutions Architect",
      description:
        "Donec fermentum sodales nisl, vitae ultrices risus consequat sed. Ut vel enim fermentum, dignissim metus eget, aliquet arcu.",
      salary: 140000,
      remote: true,
      contract: "Full-time",
    },
    {
      company: "Uber",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png",
      title: "Product Manager",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam quis convallis arcu, non gravida lorem.",
      salary: 125000,
      remote: false,
      contract: "Full-time",
    },
    {
      company: "Adobe",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Stock_logo.svg",
      title: "Graphic Designer",
      description:
        "Nam ut turpis eu mauris pellentesque dictum. Integer eget scelerisque tortor, eu accumsan ligula.",
      salary: 110000,
      remote: true,
      contract: "Full-time",
    },
    {
      company: "Salesforce",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/74/Salesforce.com_logo.svg",
      title: "Sales Engineer",
      description:
        "Sed quis enim id enim dapibus fermentum a sed sapien. Curabitur vel purus id nisl faucibus gravida ut nec turpis.",
      salary: 130000,
      remote: false,
      contract: "Full-time",
    },

    {
      company: "HP",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png",
      title: "Quality Assurance Engineer",
      description:
        "Maecenas eget dolor quis metus sollicitudin convallis sit amet ac dui. Aliquam erat volutpat.",
      salary: 115000,
      remote: true,
      contract: "Full-time",
    },
    {
      company: "Cisco",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
      title: "Network Engineer",
      description:
        "Fusce lobortis, lacus at eleifend pulvinar, dolor magna consequat risus, id interdum risus velit et orci.",
      salary: 120000,
      remote: false,
      contract: "Full-time",
    },
    {
      company: "Sony",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Sony_logo.svg/1200px-Sony_logo.svg.png",
      title: "Game Developer",
      description:
        "Vivamus tincidunt sit amet augue vel tempus. Morbi aliquam condimentum risus, eu dictum lacus vestibulum eget.",
      salary: 125000,
      remote: true,
      contract: "Full-time",
    },
    {
      company: "Oracle",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      title: "Database Administrator",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      salary: 110000,
      remote: false,
      contract: "Full-time",
    },
    {
      company: "Nvidia",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5d/Nvidia_logo.svg",
      title: "Machine Learning Engineer",
      description:
        "Sed vel leo sit amet justo tincidunt malesuada id non erat. Sed eget purus vitae metus rutrum blandit.",
      salary: 140000,
      remote: true,
      contract: "Full-time",
    },
    {
      company: "Airbnb",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png",
      title: "UX Researcher",
      description:
        "Vestibulum eu metus ac purus suscipit tempus. Nunc vulputate, urna et consectetur ultricies, dui ligula ultricies leo, quis sollicitudin justo risus ac sapien.",
      salary: 115000,
      remote: true,
      contract: "Full-time",
    },
    {
      company: "SpaceX",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/SpaceX-Logo.svg/1200px-SpaceX-Logo.svg.png",
      title: "Rocket Engineer",
      description:
        "Fusce ac nunc vestibulum, faucibus odio id, vulputate arcu. Phasellus et gravida nisi.",
      salary: 145000,
      remote: false,
      contract: "Full-time",
    },
    {
      company: "PayPal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png",
      title: "Software Developer",
      description:
        "Integer quis turpis et arcu consequat cursus nec et sapien. Sed eget libero odio.",
      salary: 125000,
      remote: true,
      contract: "Full-time",
    },
    {
      company: "LinkedIn",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/1200px-LinkedIn_logo_initials.png",
      title: "Data Analyst",
      description:
        "Curabitur id ligula feugiat, varius justo et, consequat urna. Ut malesuada, mauris eu cursus cursus, risus ex tincidunt arcu, vel convallis lorem velit et nunc.",
      salary: 110000,
      remote: false,
      contract: "Remote",
    },
    {
      company: "Dropbox",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dropbox_logo_2017.svg/1200px-Dropbox_logo_2017.svg.png",
      title: "Security Engineer",
      description:
        "Vivamus sollicitudin justo non nunc malesuada, ut bibendum leo iaculis. Nullam vitae purus magna.",
      salary: 130000,
      remote: true,
      contract: "Remote",
    },
    {
      company: "Reddit",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Reddit_logo_and_wordmark.svg/1200px-Reddit_logo_and_wordmark.svg.png",
      title: "Community Manager",
      description:
        "Mauris euismod eros at elit sagittis, eu tincidunt arcu placerat. Morbi lacinia dolor ac sapien tincidunt, quis fermentum risus sodales.",
      salary: 120000,
      remote: false,
      contract: "Remote",
    },
    {
      company: "Slack",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
      title: "Backend Engineer",
      description:
        "Cras ac risus nec urna commodo convallis eu eget quam. Curabitur ullamcorper metus in sagittis ultrices.",
      salary: 135000,
      remote: true,
      contract: "Remote",
    },
    {
      company: "Square",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Square_Logo.svg/1200px-Square_Logo.svg.png",
      title: "Financial Analyst",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      salary: 110000,
      remote: false,
      contract: "Remote",
    },
    {
      company: "Shopify",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Shopify_logo_2018.svg/1200px-Shopify_logo_2018.svg.png",
      title: "E-commerce Developer",
      description:
        "Morbi pellentesque tortor ut fringilla convallis. Duis nec nisi rutrum, consectetur ex at, sagittis magna.",
      salary: 125000,
      remote: true,
      contract: "Remote",
    },
    {
      company: "Zoom",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Zoom_Video_Communications_logo.svg/1200px-Zoom_Video_Communications_logo.svg.png",
      title: "UI Developer",
      description:
        "Fusce ullamcorper justo vel consectetur tincidunt. Integer at fringilla urna, ac fermentum felis.",
      salary: 115000,
      remote: false,
      contract: "Full-time",
    },
    {
      company: "Twitch",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Twitch_logo_%28wordmark_only%29.svg/1200px-Twitch_logo_%28wordmark_only%29.svg.png",
      title: "Streaming Engineer",
      description:
        "Etiam nec purus sit amet purus varius lacinia. Phasellus vestibulum, lorem sit amet tincidunt suscipit, magna nisi malesuada est, ac malesuada ligula metus a magna.",
      salary: 130000,
      remote: true,
      contract: "Full-time",
    },
    {
      company: "Pinterest",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Pinterest_Logo.svg/1200px-Pinterest_Logo.svg.png",
      title: "Content Manager",
      description:
        "Morbi efficitur lectus vitae massa convallis, nec pharetra nisi vestibulum. Ut vel bibendum libero.",
      salary: 120000,
      remote: false,
      contract: "Full-time",
    },
    {
      company: "Stripe",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png",
      title: "Payment Processing Specialist",
      description:
        "Proin non mauris et nulla consequat convallis. Mauris eget magna est.",
      salary: 135000,
      remote: true,
      contract: "Full-time",
    },
    {
      company: "WhatsApp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/WhatsApp_logo.svg/1200px-WhatsApp_logo.svg.png",
      title: "Mobile App Developer",
      description:
        "Quisque sit amet lacinia neque, id tempor quam. Aliquam vel dictum nisi, sed laoreet nisi.",
      salary: 115000,
      remote: false,
      contract: "Full-time",
    },
    {
      company: "Dropbox",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dropbox_logo_2017.svg/1200px-Dropbox_logo_2017.svg.png",
      title: "Software Engineer",
      description:
        "Maecenas aliquam justo id justo lacinia rutrum. Mauris lacinia mauris eu neque volutpat, sed congue lorem fringilla.",
      salary: 120000,
      remote: true,
      contract: "Full-time",
    },
    {
      company: "Oracle",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      title: "Database Developer",
      description:
        "Nulla eu nunc ac sem tempus aliquam. Ut rhoncus elit et tellus elementum vestibulum.",
      salary: 125000,
      remote: false,
      contract: "Full-time",
    },
    {
      company: "Spotify",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png",
      title: "Music Streaming Specialist",
      description:
        "Integer accumsan velit non risus efficitur pharetra. In vitae ex consectetur, eleifend metus a, vestibulum felis.",
      salary: 130000,
      remote: true,
      contract: "Full-time",
    },
    {
      company: "Dropbox",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dropbox_logo_2017.svg/1200px-Dropbox_logo_2017.svg.png",
      title: "Frontend Developer",
      description:
        "Maecenas aliquam justo id justo lacinia rutrum. Mauris lacinia mauris eu neque volutpat, sed congue lorem fringilla.",
      salary: 120000,
      remote: true,
      contract: "Full-time",
    },
    {
      company: "Oracle",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      title: "Database Engineer",
      description:
        "Nulla eu nunc ac sem tempus aliquam. Ut rhoncus elit et tellus elementum vestibulum.",
      salary: 125000,
      remote: false,
      contract: "Full-time",
    },
    {
      company: "Spotify",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png",
      title: "Music Streaming Engineer",
      description:
        "Integer accumsan velit non risus efficitur pharetra. In vitae ex consectetur, eleifend metus a, vestibulum felis.",
      salary: 130000,
      remote: true,
      contract: "Full-time",
    },
  ]);

  const handleFilterChange = (type, value) => {
    let filtered = filteredData;

    if (type === "title") {
      filtered = filtered.filter((job) => job.title === value);
    } else if (type === "salary") {
      // You can implement salary filtering logic here
    } else if (type === "remote") {
      filtered = filtered.filter((job) => job.remote === (value === "true"));
    } else if (type === "contract") {
      filtered = filtered.filter((job) => job.contract === value);
    } else {
      setFilteredData(filtered);
    }
  };

  // function formatSalary(salary) {
  //   return salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }

  return (
    <div className="flex-column justify-center">
      <div className="flex justify-center items-center bg-gray-100">
        <div className="container mx-auto flex flex-row">
          <div className="w-1/4 p-4">
            {/* Filters component */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-bold mb-4">Filters</h2>
              <Filter
                title="Job Title"
                options={[
                  { label: "All", value: "" },
                  { label: "Software Engineer", value: "Software Engineer" },
                  { label: "Frontend Developer", value: "Frontend Developer" },
                  // Add more job titles as needed
                ]}
                onChange={(value) => handleFilterChange("title", value)}
              />
              <Filter
                title="Salary"
                options={[
                  { label: "All", value: "" },
                  {
                    label: "$100,000 - $120,000",
                    value: "$100,000 - $120,000",
                  },
                  {
                    label: "$120,000 - $140,000",
                    value: "$120,000 - $140,000",
                  },
                  // Add more salary ranges as needed
                ]}
                onChange={(value) => handleFilterChange("salary", value)}
              />
              <Filter
                title="Remote"
                options={[
                  { label: "All", value: "" },
                  { label: "Yes", value: "true" },
                  { label: "No", value: "false" },
                ]}
                onChange={(value) => handleFilterChange("remote", value)}
              />
              <Filter
                title="Contract Type"
                options={[
                  { label: "All", value: "" },
                  { label: "Full-time", value: "Full-time" },
                  { label: "Contract", value: "Contract" },
                  // Add more contract types as needed
                ]}
                onChange={(value) => handleFilterChange("contract", value)}
              />
            </div>
          </div>
          <div className="w-3/4 p-4">
            {/* Job list component */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-bold mb-4">Job List</h2>
              {filteredData.map((job, index) => (
                <JobCard
                  key={index} // Remember to provide a unique key
                  company={job.company}
                  image={job.image}
                  title={job.title}
                  description={job.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
