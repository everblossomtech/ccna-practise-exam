const QUESTIONS = [
  {
    question: "Which layer of the OSI model is responsible for logical addressing and routing?",
    options: ["Data Link", "Network", "Transport", "Physical"],
    answer: "Network",
    explain: "The Network layer (Layer 3) handles logical addressing (IP) and routing between networks."
  },
  {
    question: "What is the purpose of a subnet mask in IPv4 addressing?",
    options: ["Encrypt data", "Identify the network and host portion of an IP address", "Assign MAC addresses", "Control bandwidth"],
    answer: "Identify the network and host portion of an IP address",
    explain: "A subnet mask divides the IP address into network and host portions for routing and network segmentation."
  },
  {
    question: "Which protocol is used to automatically assign IP addresses to devices on a network?",
    options: ["DNS", "DHCP", "ARP", "ICMP"],
    answer: "DHCP",
    explain: "DHCP (Dynamic Host Configuration Protocol) dynamically assigns IP addresses to devices in a network."
  },
  {
    question: "What is the main function of a MAC address?",
    options: ["Logical addressing", "Physical device identification on a LAN", "Routing between networks", "Encrypting packets"],
    answer: "Physical device identification on a LAN",
    explain: "A MAC (Media Access Control) address uniquely identifies a device on a local network (Layer 2)."
  },
  {
    question: "Which of the following is a private IP address range?",
    options: ["8.8.8.8", "192.168.0.0/16", "172.15.0.0", "1.1.1.1"],
    answer: "192.168.0.0/16",
    explain: "192.168.0.0/16 is a private IPv4 address range used internally on networks."
  },
  {
    question: "Which protocol resolves IP addresses to MAC addresses on a LAN?",
    options: ["DHCP", "ARP", "DNS", "ICMP"],
    answer: "ARP",
    explain: "ARP (Address Resolution Protocol) maps an IP address to a MAC address for local network communication."
  },
  {
    question: "What is the maximum number of hosts in a /24 IPv4 subnet?",
    options: ["128", "254", "256", "512"],
    answer: "254",
    explain: "A /24 subnet has 256 IP addresses; 2 are reserved (network and broadcast), leaving 254 usable host addresses."
  },
  {
    question: "Which OSI layer provides end-to-end delivery and error detection?",
    options: ["Physical", "Data Link", "Transport", "Network"],
    answer: "Transport",
    explain: "The Transport layer (Layer 4) ensures reliable delivery and error checking using protocols like TCP."
  },
  {
    question: "Which device connects multiple devices in the same network and forwards frames based on MAC addresses?",
    options: ["Router", "Switch", "Hub", "Firewall"],
    answer: "Switch",
    explain: "Switches operate at Layer 2, forwarding frames based on MAC addresses to the correct port."
  },
  {
    question: "Which protocol is used to resolve domain names to IP addresses?",
    options: ["DHCP", "DNS", "ICMP", "ARP"],
    answer: "DNS",
    explain: "DNS (Domain Name System) translates domain names (like www.google.com) into IP addresses."
  },
  {
    question: "Which IPv6 address type identifies multiple devices simultaneously?",
    options: ["Unicast", "Multicast", "Anycast", "Broadcast"],
    answer: "Multicast",
    explain: "Multicast addresses in IPv6 target multiple devices, similar to broadcast in IPv4 (IPv6 does not use traditional broadcast)."
  },
  {
    question: "What is the primary purpose of a default gateway?",
    options: ["Forward traffic within the same LAN", "Forward traffic to other networks", "Assign IP addresses", "Filter network traffic"],
    answer: "Forward traffic to other networks",
    explain: "The default gateway routes traffic from the local network to remote networks."
  },
  {
    question: "What is the purpose of the ARP cache?",
    options: ["Store MAC addresses corresponding to IP addresses", "Store DNS records", "Store routing tables", "Store firewall rules"],
    answer: "Store MAC addresses corresponding to IP addresses",
    explain: "ARP cache speeds up network communication by storing recently resolved IP-to-MAC address mappings."
  },
  {
    question: "Which layer encapsulates data into frames for transmission on a local network?",
    options: ["Network", "Transport", "Data Link", "Physical"],
    answer: "Data Link",
    explain: "The Data Link layer (Layer 2) encapsulates packets into frames and adds MAC addresses."
  },
  {
    question: "Which IPv4 address class is used for very large networks?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    answer: "Class A",
    explain: "Class A addresses (1.0.0.0 – 126.255.255.255) support very large networks."
  },
  {
    question: "What is the purpose of a broadcast address?",
    options: ["Identify a single host", "Identify all hosts in a subnet", "Route packets between networks", "Encrypt traffic"],
    answer: "Identify all hosts in a subnet",
    explain: "A broadcast address (like 192.168.1.255 in /24) sends a packet to all hosts in the subnet."
  },
  {
    question: "Which protocol is connectionless and operates at Layer 4?",
    options: ["TCP", "UDP", "ICMP", "ARP"],
    answer: "UDP",
    explain: "UDP is connectionless and provides fast, unreliable delivery without error correction."
  },
  {
    question: "Which protocol is used to test reachability and latency of network devices?",
    options: ["ICMP", "ARP", "DNS", "DHCP"],
    answer: "ICMP",
    explain: "ICMP ping messages check if a device is reachable and measure response time."
  },
  {
    question: "What is the binary equivalent of IPv4 address 192.168.1.1?",
    options: ["11000000.10101000.00000001.00000001", "11000000.10101000.00000001.00000010", "10101000.00000001.00000001.11000000", "00000001.00000001.10101000.11000000"],
    answer: "11000000.10101000.00000001.00000001",
    explain: "Each decimal octet is converted into 8-bit binary."
  },
  {
    question: "Which device forwards packets between different IP networks?",
    options: ["Switch", "Router", "Hub", "Bridge"],
    answer: "Router",
    explain: "Routers operate at Layer 3, using IP addresses to forward packets between networks."
  },
  {
    question: "Which protocol is used for network time synchronization?",
    options: ["SNMP", "NTP", "DHCP", "ICMP"],
    answer: "NTP",
    explain: "NTP (Network Time Protocol) synchronizes the clocks of network devices."
  },
  {
    question: "What is the purpose of a collision domain in Ethernet?",
    options: ["Define broadcast area", "Define a network segment where collisions can occur", "Assign IP addresses", "Encrypt data"],
    answer: "Define a network segment where collisions can occur",
    explain: "A collision domain is a network segment where simultaneous transmissions can cause collisions."
  },
  {
    question: "Which layer of the OSI model defines electrical signals and cabling?",
    options: ["Physical", "Data Link", "Network", "Transport"],
    answer: "Physical",
    explain: "The Physical layer (Layer 1) defines voltage, cabling, and signaling methods."
  },
  {
    question: "Which protocol is used to remotely configure network devices securely?",
    options: ["Telnet", "SSH", "FTP", "HTTP"],
    answer: "SSH",
    explain: "SSH encrypts communication for secure remote device configuration."
  },
  {
    question: "What is the purpose of VLANs?",
    options: ["Connect different networks", "Create logically separated networks on the same physical switch", "Assign MAC addresses", "Encrypt traffic"],
    answer: "Create logically separated networks on the same physical switch",
    explain: "VLANs logically segment a switch into multiple broadcast domains."
  },
  {
    question: "Which IPv4 address is used to represent “any host”?",
    options: ["0.0.0.0", "255.255.255.255", "127.0.0.1", "192.168.1.1"],
    answer: "0.0.0.0",
    explain: "0.0.0.0 can represent any host in routing tables or during DHCP initialization."
  },
  {
    question: "Which protocol resolves hostnames to IP addresses on a network?",
    options: ["DHCP", "DNS", "ICMP", "ARP"],
    answer: "DNS",
    explain: "DNS maps human-readable domain names to IP addresses."
  },
  {
    question: "Which device is used to prevent unauthorized access between networks?",
    options: ["Router", "Switch", "Firewall", "Hub"],
    answer: "Firewall",
    explain: "Firewalls monitor and filter traffic to protect networks."
  },
  {
    question: "Which layer of the OSI model ensures error-free frame delivery?",
    options: ["Physical", "Data Link", "Network", "Transport"],
    answer: "Data Link",
    explain: "The Data Link layer can detect and correct errors in frames using mechanisms like CRC."
  },
  {
    question: "What is the primary function of ICMP?",
    options: ["Assign IP addresses", "Error reporting and diagnostics", "Encrypt data", "Forward packets"],
    answer: "Error reporting and diagnostics",
    explain: "ICMP reports errors (unreachable, TTL expired) and diagnostic messages (ping, traceroute)."
  },
  {
    question: "Which protocol allows devices to request IP addresses automatically?",
    options: ["DNS", "DHCP", "ICMP", "ARP"],
    answer: "DHCP",
    explain: "DHCP assigns IP addresses to hosts dynamically."
  },
  {
    question: "Which address is used for local host communication?",
    options: ["0.0.0.0", "127.0.0.1", "192.168.1.1", "255.255.255.255"],
    answer: "127.0.0.1",
    explain: "127.0.0.1 (loopback) is used for testing the host’s TCP/IP stack."
  },
  {
    question: "Which network type uses a point-to-point connection between two devices?",
    options: ["LAN", "WAN", "MAN", "PAN"],
    answer: "WAN",
    explain: "WANs connect devices across large distances using point-to-point or routed links."
  },
  {
    question: "Which Layer 2 protocol helps prevent loops in a network with multiple switches?",
    options: ["STP", "RIP", "OSPF", "ICMP"],
    answer: "STP",
    explain: "Spanning Tree Protocol prevents Layer 2 loops in Ethernet networks."
  },
  {
    question: "Which IPv4 address is reserved for broadcast?",
    options: ["0.0.0.0", "255.255.255.255", "127.0.0.1", "192.168.1.1"],
    answer: "255.255.255.255",
    explain: "255.255.255.255 is the IPv4 broadcast address for all hosts in the network."
  },
  {
    question: "What is the purpose of the TTL field in an IP packet?",
    options: ["Set packet priority", "Prevent routing loops", "Encrypt packet", "Assign IP addresses"],
    answer: "Prevent routing loops",
    explain: "TTL (Time to Live) limits packet lifetime to prevent infinite loops."
  },
  {
    question: "Which protocol does ping use?",
    options: ["TCP", "ICMP", "UDP", "HTTP"],
    answer: "ICMP",
    explain: "Ping uses ICMP echo request and echo reply messages."
  },
  {
    question: "What is the main function of a hub?",
    options: ["Forward packets using IP", "Broadcast frames to all ports", "Switch frames intelligently", "Assign IP addresses"],
    answer: "Broadcast frames to all ports",
    explain: "Hubs broadcast incoming signals to all ports without filtering."
  },
  {
    question: "Which network topology connects each device to a central switch or hub?",
    options: ["Bus", "Star", "Ring", "Mesh"],
    answer: "Star",
    explain: "In a star topology, all devices connect to a central device."
  },
  {
    question: "Which IPv4 class has the default subnet mask 255.255.0.0?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    answer: "Class B",
    explain: "Class B addresses have default subnet mask 255.255.0.0 for medium networks."
  },
  {
    question: "Which layer adds source and destination MAC addresses to a frame?",
    options: ["Physical", "Data Link", "Network", "Transport"],
    answer: "Data Link",
    explain: "Data Link layer adds MAC addresses in the frame header."
  },
  {
    question: "What does a router use to forward packets?",
    options: ["MAC addresses", "IP addresses", "VLAN IDs", "Switchports"],
    answer: "IP addresses",
    explain: "Routers operate at Layer 3 and forward packets based on IP addresses."
  },
  {
    question: "Which type of cable is commonly used for connecting switch to router?",
    options: ["Crossover", "Straight-through", "Coaxial", "Fiber"],
    answer: "Straight-through",
    explain: "Straight-through cables connect different device types like switch → router."
  },
  {
    question: "What is the purpose of CSMA/CD in Ethernet?",
    options: ["Prevent packet loss", "Control collisions on shared media", "Encrypt traffic", "Forward packets"],
    answer: "Control collisions on shared media",
    explain: "CSMA/CD detects collisions and retransmits frames in Ethernet."
  },
  {
    question: "Which protocol is used for secure file transfer?",
    options: ["FTP", "SFTP", "TFTP", "HTTP"],
    answer: "SFTP",
    explain: "SFTP encrypts file transfers using SSH."
  },
  {
    question: "Which command displays the IP configuration of a host in Windows?",
    options: ["ifconfig", "ipconfig", "ping", "traceroute"],
    answer: "ipconfig",
    explain: "`ipconfig` shows IP addresses, subnet masks, and gateways."
  },
  {
    question: "Which address type identifies a single interface on a network?",
    options: ["Unicast", "Multicast", "Broadcast", "Anycast"],
    answer: "Unicast",
    explain: "Unicast addresses are unique to a single host."
  },
  {
    question: "Which layer is responsible for segmenting data for transport?",
    options: ["Network", "Transport", "Session", "Application"],
    answer: "Transport",
    explain: "Transport layer breaks data into segments and ensures delivery."
  },
  {
    question: "What is the function of a default route in a routing table?",
    options: ["Forward packets to unknown networks", "Block traffic", "Assign IP addresses", "Encrypt packets"],
    answer: "Forward packets to unknown networks",
    explain: "Default route forwards packets to the gateway when no specific route exists."
  },
  {
    question: "What is the standard port number for HTTP?",
    options: ["20", "22", "80", "443"],
    answer: "80",
    explain: "HTTP uses TCP port 80 for web traffic."
  }
];
