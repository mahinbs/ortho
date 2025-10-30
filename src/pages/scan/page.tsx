
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../../components/feature/Navigation';
import { TabBar } from '../../components/feature/TabBar';
import { Button } from '../../components/base/Button';

export default function ScanPage() {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const startScan = () => {
    setIsScanning(true);
    // Simulate AI analysis
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        overallScore: 72,
        issues: [
          { type: 'Crowding', severity: 'Moderate', confidence: 89 },
          { type: 'Overbite', severity: 'Mild', confidence: 76 },
          { type: 'Alignment', severity: 'Mild', confidence: 82 }
        ],
        recommendations: [
          'Clear aligners recommended for 12-18 months',
          'Consider consultation with orthodontist',
          'Regular dental hygiene important during treatment'
        ]
      });
    }, 3000);
  };

  const scanOptions = [
    {
      title: 'Front Smile',
      description: 'Capture your front smile for alignment analysis',
      icon: 'ri-emotion-happy-line',
      recommended: true
    },
    {
      title: 'Side Profile',
      description: 'Side view for bite and jaw analysis',
      icon: 'ri-user-line',
      recommended: false
    },
    {
      title: 'Upper Teeth',
      description: 'Close-up of upper teeth alignment',
      icon: 'ri-camera-line',
      recommended: false
    },
    {
      title: 'Lower Teeth',
      description: 'Close-up of lower teeth alignment',
      icon: 'ri-camera-line',
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Navigation />
      
      <main className="pt-20 pb-20 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">AI Smile Analysis</h1>
          <p className="text-gray-600 text-lg leading-relaxed">Upload a photo for instant orthodontic assessment</p>
        </div>

        {!selectedImage && !scanResult && (
          <>
            {/* Upload Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 mb-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <i className="ri-camera-line text-white text-3xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Take or Upload Photo</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">For best results, ensure good lighting and show your full smile</p>
                
                <div className="space-y-4">
                  <label className="block">
                    <input
                      type="file"
                      accept="image/*"
                      capture="user"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <Button variant="primary" className="w-full shadow-xl hover:shadow-2xl transition-all duration-300">
                      <i className="ri-camera-line mr-3 text-lg"></i>
                      Take Photo
                    </Button>
                  </label>
                  
                  <label className="block">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <Button variant="outline" className="w-full shadow-lg hover:shadow-xl transition-all duration-300">
                      <i className="ri-upload-line mr-3 text-lg"></i>
                      Upload from Gallery
                    </Button>
                  </label>
                </div>
              </div>
            </div>

            {/* Scan Options */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">Scan Types</h2>
              <div className="space-y-4">
                {scanOptions.map((option, index) => (
                  <div
                    key={index}
                    className="group bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/50 flex items-center space-x-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <i className={`${option.icon} text-white text-xl`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <h3 className="font-bold text-gray-900 text-lg">{option.title}</h3>
                        {option.recommended && (
                          <span className="bg-gradient-to-r from-green-400 to-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                            Recommended
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 leading-relaxed">{option.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 border border-blue-100/50 shadow-lg">
              <h3 className="font-bold text-blue-900 mb-4 flex items-center text-lg">
                <i className="ri-lightbulb-line mr-3 text-xl"></i>
                Photography Tips
              </h3>
              <ul className="text-blue-800 space-y-2 font-medium">
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                  Ensure good lighting (natural light preferred)
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                  Keep your head straight and look directly at camera
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                  Show your full smile with teeth visible
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                  Remove any food particles before scanning
                </li>
              </ul>
            </div>
          </>
        )}

        {selectedImage && !isScanning && !scanResult && (
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300">
              <div className="relative mb-6 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <img
                  src={selectedImage}
                  alt="Selected smile"
                  className="relative w-full h-72 object-cover object-center rounded-2xl shadow-xl"
                />
              </div>
              <div className="flex space-x-4">
                <Button
                  variant="primary"
                  className="flex-1 shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={startScan}
                >
                  <i className="ri-ai-generate mr-3 text-lg"></i>
                  Analyze with AI
                </Button>
                <Button
                  variant="outline"
                  className="shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    setSelectedImage(null);
                    setScanResult(null);
                  }}
                >
                  <i className="ri-refresh-line text-lg"></i>
                </Button>
              </div>
            </div>
          </div>
        )}

        {isScanning && (
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-white/50 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 animate-pulse shadow-2xl">
              <i className="ri-ai-generate text-white text-3xl"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Analyzing Your Smile</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">Our AI is examining your teeth alignment, bite, and overall oral health...</p>
            <div className="relative">
              <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full animate-pulse shadow-lg transition-all duration-500" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        )}

        {scanResult && (
          <div className="space-y-6">
            {/* Overall Score */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 text-center hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Analysis Complete</h2>
              <div className="relative w-28 h-28 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-white text-2xl font-bold">{scanResult.overallScore}</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur opacity-20"></div>
              </div>
              <p className="text-gray-600 text-lg font-medium">Overall Smile Health Score</p>
            </div>

            {/* Issues Detected */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300">
              <h3 className="font-bold text-gray-900 mb-6 text-xl tracking-tight">Issues Detected</h3>
              <div className="space-y-4">
                {scanResult.issues.map((issue: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{issue.type}</p>
                      <p className="text-gray-600 font-medium">Severity: {issue.severity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-600">{issue.confidence}%</p>
                      <p className="text-sm text-gray-500 font-medium">Confidence</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300">
              <h3 className="font-bold text-gray-900 mb-6 text-xl tracking-tight">Recommendations</h3>
              <div className="space-y-3">
                {scanResult.recommendations.map((rec: string, index: number) => (
                  <div key={index} className="flex items-start space-x-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <p className="text-gray-800 font-medium leading-relaxed">{rec}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                variant="primary"
                className="w-full shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => navigate('/consult')}
              >
                Book Consultation
              </Button>
              <Button
                variant="outline"
                className="w-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigate('/ar-preview')}
              >
                See Future Smile (AR)
              </Button>
              <Button
                variant="ghost"
                className="w-full hover:bg-gray-50/50 transition-all duration-300"
                onClick={() => {
                  setSelectedImage(null);
                  setScanResult(null);
                }}
              >
                Scan Another Photo
              </Button>
            </div>
          </div>
        )}
      </main>

      <TabBar />
    </div>
  );
}
