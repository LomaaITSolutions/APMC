import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, RefreshCw, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
 
const MedicalRegisterSearchPage = () => {
  const [searchData, setSearchData] = useState({
    name: "",
    gender: "",
    fatherName: "",
    registrationNo: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNameSearch = () => {
    console.log("Searching by name:", { name: searchData.name, gender: searchData.gender, fatherName: searchData.fatherName });
  };

  const handleRegistrationSearch = () => {
    console.log("Searching by registration number:", searchData.registrationNo);
  };

  const handleRefresh = () => {
    setSearchData({
      name: "",
      gender: "",
      fatherName: "",
      registrationNo: ""
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
    
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-6xl mx-auto shadow-2xl border border-teal-300 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center bg-teal-700 text-white relative overflow-hidden rounded-t-lg">
              <div className="absolute inset-0 bg-teal-800/20"></div>
              <div className="relative z-10 py-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
                            <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                            <img src="favicon.ico" alt="APMC Logo" className="h-20 w-20 rounded-[50%]" />
                            </div>                  
                <CardTitle className="text-3xl font-bold drop-shadow-lg">
                    Andhra Pradesh Medical Council
                </CardTitle>
                </div>
                <p className="text-xl font-semibold underline decoration-2 underline-offset-4">
                  Search the Medical Register
                </p>
              </div>
            </CardHeader>
            
            <CardContent className="p-8 md:p-10">
              {/* Name-based Search Section */}
              <div className="space-y-8">
                <div className="bg-teal-50 p-6 rounded-xl border border-teal-200">
                  <h3 className="text-lg font-semibold text-teal-700 mb-6 flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    Search by Personal Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-teal-700">
                        Name<span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="Enter full name"
                        value={searchData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="border-teal-300 focus:border-teal-700 focus:ring-teal-200 h-11 text-base shadow-sm"
                      />
                    </div>
                  
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-teal-700">
                        Gender<span className="text-red-500">*</span>
                      </label>
                      <Select value={searchData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                        <SelectTrigger className="border-teal-300 focus:border-teal-700 h-11 shadow-sm">
                          <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-teal-700">
                        Father Name
                      </label>
                      <Input
                        placeholder="Enter father's name"
                        value={searchData.fatherName}
                        onChange={(e) => handleInputChange("fatherName", e.target.value)}
                        className="border-teal-300 focus:border-teal-700 focus:ring-teal-200 h-11 text-base shadow-sm"
                      />
                    </div>
                    
                    <Button
                      onClick={handleNameSearch}
                      className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 h-auto font-semibold text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 rounded-lg"
                    >
                      <Search className="mr-2 h-5 w-5" />
                      Search By Name
                    </Button>
                  </div>
                </div>
                
                {/* OR Divider */}
                <div className="flex items-center justify-center my-8">
                  <div className="flex-1 border-t-2 border-teal-200"></div>
                  <span className="px-6 py-2 text-xl font-bold text-white bg-teal-500 rounded-full shadow-lg">OR</span>
                  <div className="flex-1 border-t-2 border-teal-200"></div>
                </div>
                
                {/* Registration Number Search Section */}
                <div className="bg-teal-50 p-6 rounded-xl border border-teal-200">
                  <h3 className="text-lg font-semibold text-teal-700 mb-6 flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    Search by Registration Number
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-teal-700">
                        Final Medical Registration No :
                      </label>
                      <Input
                        placeholder="Enter registration number"
                        value={searchData.registrationNo}
                        onChange={(e) => handleInputChange("registrationNo", e.target.value)}
                        className="border-teal-300 focus:border-teal-700 focus:ring-teal-200 h-11 text-base shadow-sm"
                      />
                    </div>
                    
                    <Button
                      onClick={handleRegistrationSearch}
                      className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 h-auto font-semibold text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 rounded-lg"
                    >
                      <Search className="mr-2 h-5 w-5" />
                      Search by Registration No
                    </Button>
                    
                    <Button
                      onClick={handleRefresh}
                      variant="outline"
                      className="border-2 border-teal-500 text-red-500 hover:bg-teal-500 hover:text-white px-6 py-3 h-auto font-semibold text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 rounded-lg"
                    >
                      <RefreshCw className="mr-2 h-5 w-5" />
                      Refresh
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Search Results Info */}
              <div className="mt-8 p-6 bg-teal-50 rounded-xl border border-teal-200 shadow-inner text-center">
                <p className="text-base text-teal-700">
                  <span className="font-semibold">Search Results as per the records of APMC upto :</span>
                  <span className="text-red-500 font-bold bg-white px-3 py-1 rounded-full shadow-sm ml-2">10/09/2025</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MedicalRegisterSearchPage;
