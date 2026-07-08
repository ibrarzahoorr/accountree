import Image from "next/image";

const physical = [
  {
    title: "Dedicated Infrastructure",
    body: "Fixed office and workstation for every employee",
  },
  {
    title: "Access Control Systems",
    body: "Designation-based employee access to each office floor",
  },
  {
    title: "Video Surveillance",
    body: "24/7 surveillance by CCTV cameras",
  },
  {
    title: "Mobile Phone Restriction",
    body: "No cell phones allowed on the floor",
  },
  {
    title: "Restriction on Printing",
    body: "Team leads and higher ranks have printing privileges",
  },
  {
    title: "Fire Safety",
    body: "Necessary fire safety equipment in place",
  },
];

const policies = [
  "Firewall with content and website filters",
  "SSL VPN for employees who work from home",
  "Group email ID by client",
  "Password protected systems",
  "Folder access rights to client specific teams",
  "Secure browser with antivirus and firewall.",
  "No USB access or cell phone access",
  "No access to office Wi-Fi on private cell phone",
];

export default function InfrastructureSection() {
  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-16 sm:px-8 lg:px-[146px] lg:pt-24">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative h-[520px] w-full sm:h-[600px] lg:h-[647px]">
            <Image
              src="/images/about/rectangle-6108-18daf7bf.png"
              alt="Physical infrastructure"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-[400px]"
              style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)" }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <h3 className="font-poppins text-2xl font-semibold tracking-[-0.5px] text-white sm:text-3xl lg:text-4xl">
                Physical Infrastructure
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6">
                {physical.map((p) => (
                  <div key={p.title}>
                    <p className="font-poppins text-sm font-semibold text-white">
                      {p.title}
                    </p>
                    <p className="mt-1 font-poppins text-sm text-white">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative h-[520px] w-full sm:h-[600px] lg:h-[647px]">
            <Image
              src="/images/about/rectangle-6114-0c7d253e.png"
              alt="Security control"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-[480px] sm:h-[537px]"
              style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.92) 100%)" }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <h3 className="font-poppins text-2xl font-semibold tracking-[-0.5px] text-white sm:text-3xl lg:text-4xl">
                Security Control Policies
              </h3>
              <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:gap-3">
                {policies.map((p) => (
                  <p key={p} className="font-poppins text-sm text-white">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
