const nextConfig = {
  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
  },
  env: {
    MONGODB_URI: "mongodb+srv://nikolamirilo:veslanje123@cluster0.phoutob.mongodb.net/",
  },
};

export default nextConfig;
