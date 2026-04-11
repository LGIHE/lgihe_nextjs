'use client';

import { useState, useEffect } from 'react';

interface FormData {
  // Personal Information
  surname: string;
  givenName: string;
  otherNames: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  nationalId: string;
  placeOfBirth: string;
  
  // Contact Information
  email: string;
  phone: string;
  alternativePhone: string;
  postalAddress: string;
  district: string;
  village: string;
  
  // Programme Information
  programmeType: string;
  programmeChoice1: string;
  programmeChoice2: string;
  studyMode: string;
  intakeSession: string;
  
  // Educational Background
  olevelSchool: string;
  olevelYear: string;
  olevelGrade: string;
  alevelSchool: string;
  alevelYear: string;
  alevelGrade: string;
  otherQualifications: Array<{
    title: string;
    institution: string;
    year: string;
  }>;
  
  // Employment Information
  currentEmployment: string;
  employer: string;
  position: string;
  yearsOfExperience: string;
  
  // Next of Kin
  kinName: string;
  kinRelationship: string;
  kinPhone: string;
  kinAddress: string;
  
  // Additional Information
  disabilities: string;
  medicalConditions: string;
  howDidYouHear: string;
  
  // Declaration
  declaration: boolean;
}

const STORAGE_KEY = 'lgihe_application_draft';

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    surname: '',
    givenName: '',
    otherNames: '',
    dateOfBirth: '',
    gender: '',
    nationality: 'Ugandan',
    nationalId: '',
    placeOfBirth: '',
    email: '',
    phone: '',
    alternativePhone: '',
    postalAddress: '',
    district: '',
    village: '',
    programmeType: '',
    programmeChoice1: '',
    programmeChoice2: '',
    studyMode: '',
    intakeSession: '',
    olevelSchool: '',
    olevelYear: '',
    olevelGrade: '',
    alevelSchool: '',
    alevelYear: '',
    alevelGrade: '',
    otherQualifications: [],
    currentEmployment: 'no',
    employer: '',
    position: '',
    yearsOfExperience: '',
    kinName: '',
    kinRelationship: '',
    kinPhone: '',
    kinAddress: '',
    disabilities: '',
    medicalConditions: '',
    howDidYouHear: '',
    declaration: false,
  });

  const [currentSection, setCurrentSection] = useState(0);
  const [savedMessage, setSavedMessage] = useState('');
  const [showOLevel, setShowOLevel] = useState(false);
  const [showALevel, setShowALevel] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Load saved data on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
        setSavedMessage('Draft loaded from previous session');
        setTimeout(() => setSavedMessage(''), 3000);
      } catch (e) {
        console.error('Error loading saved data:', e);
      }
    }
  }, []);

  // Auto-save on form data change
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      setSavedMessage('Draft saved');
      setTimeout(() => setSavedMessage(''), 2000);
    }, 1000);

    return () => clearTimeout(timer);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    // If programme type changes, reset programme choices
    if (name === 'programmeType') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        programmeChoice1: '',
        programmeChoice2: ''
      }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const addOtherQualification = () => {
    setFormData(prev => ({
      ...prev,
      otherQualifications: [...prev.otherQualifications, { title: '', institution: '', year: '' }]
    }));
  };

  const removeOtherQualification = (index: number) => {
    setFormData(prev => ({
      ...prev,
      otherQualifications: prev.otherQualifications.filter((_, i) => i !== index)
    }));
  };

  const updateOtherQualification = (index: number, field: 'title' | 'institution' | 'year', value: string) => {
    setFormData(prev => ({
      ...prev,
      otherQualifications: prev.otherQualifications.map((qual, i) => 
        i === index ? { ...qual, [field]: value } : qual
      )
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.declaration) {
      alert('Please accept the declaration to submit your application');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);
        // Clear saved draft
        localStorage.removeItem(STORAGE_KEY);
      } else {
        alert('Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('An error occurred while submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearDraft = () => {
    if (confirm('Are you sure you want to clear your saved draft?')) {
      localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    }
  };

  const sections = [
    { title: 'Personal Information', fields: ['surname', 'givenName', 'otherNames', 'dateOfBirth', 'gender', 'nationality', 'nationalId', 'placeOfBirth'] },
    { title: 'Contact Information', fields: ['email', 'phone', 'alternativePhone', 'postalAddress', 'district', 'village'] },
    { title: 'Programme Selection', fields: ['programmeType', 'programmeChoice1', 'programmeChoice2', 'studyMode', 'intakeSession'] },
    { title: 'Educational Background', fields: ['education'] }, // Custom rendering
    { title: 'Employment & Next of Kin', fields: ['currentEmployment', 'employer', 'position', 'yearsOfExperience', 'kinName', 'kinRelationship', 'kinPhone', 'kinAddress'] },
    { title: 'Additional Information & Declaration', fields: ['disabilities', 'medicalConditions', 'howDidYouHear', 'declaration'] },
  ];

  const commonClasses = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d4d6f] focus:border-transparent";

  const renderField = (fieldName: keyof FormData) => {
    switch (fieldName) {
      case 'gender':
        return (
          <select name="gender" value={formData.gender} onChange={handleChange} className={commonClasses} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        );
      
      case 'programmeType':
        return (
          <select name="programmeType" value={formData.programmeType} onChange={handleChange} className={commonClasses} required>
            <option value="">Select Programme Type</option>
            <option value="Certificate">Certificate</option>
            <option value="Diploma">Diploma</option>
            <option value="Undergraduate">Undergraduate (Bachelor's)</option>
            <option value="Postgraduate">Postgraduate Diploma</option>
          </select>
        );
      
      case 'programmeChoice1':
      case 'programmeChoice2':
        const programmes = {
          Certificate: [
            { value: 'Certificate in Early Childhood Care and Education', label: 'Certificate in Early Childhood Care and Education' },
            { value: 'Certificate in Child Care and Development', label: 'Certificate in Child Care and Development' }
          ],
          Diploma: [
            { value: 'Diploma in Pre-Primary Education', label: 'Diploma in Pre-Primary Education' },
            { value: 'Diploma in Primary Education', label: 'Diploma in Primary Education' },
            { value: 'Diploma in Educational Leadership and Management', label: 'Diploma in Educational Leadership and Management' }
          ],
          Undergraduate: [
            { value: 'Bachelor of Pre-Primary Education', label: 'Bachelor of Pre-Primary Education' },
            { value: 'Bachelor of Primary Education', label: 'Bachelor of Primary Education' },
            { value: 'Bachelor of Arts with Education (Secondary)', label: 'Bachelor of Arts with Education (Secondary)' },
            { value: 'Bachelor of Science with Education (Secondary)', label: 'Bachelor of Science with Education (Secondary)' }
          ],
          Postgraduate: [
            { value: 'Postgraduate Diploma in Primary Education', label: 'Postgraduate Diploma in Primary Education' },
            { value: 'Postgraduate Diploma in Educational Leadership and Management', label: 'Postgraduate Diploma in Educational Leadership and Management' }
          ]
        };

        const availableProgrammes = formData.programmeType ? programmes[formData.programmeType as keyof typeof programmes] || [] : [];

        return (
          <select 
            name={fieldName} 
            value={formData[fieldName]} 
            onChange={handleChange} 
            className={commonClasses} 
            required={fieldName === 'programmeChoice1'}
            disabled={!formData.programmeType}
          >
            <option value="">{!formData.programmeType ? 'Please select Programme Type first' : 'Select Programme'}</option>
            {availableProgrammes.map(prog => (
              <option key={prog.value} value={prog.value}>{prog.label}</option>
            ))}
          </select>
        );
      
      case 'studyMode':
        return (
          <select name="studyMode" value={formData.studyMode} onChange={handleChange} className={commonClasses} required>
            <option value="">Select Study Mode</option>
            <option value="In-session (Weekend)">In-session (Weekend)</option>
            <option value="Holiday">Holiday</option>
          </select>
        );
      
      case 'intakeSession':
        return (
          <select name="intakeSession" value={formData.intakeSession} onChange={handleChange} className={commonClasses} required>
            <option value="">Select Intake</option>
            <option value="January 2026">January 2026</option>
            <option value="February 2026">February 2026</option>
            <option value="May 2026">May 2026</option>
            <option value="August 2026">August 2026</option>
          </select>
        );
      
      case 'currentEmployment':
        return (
          <select name="currentEmployment" value={formData.currentEmployment} onChange={handleChange} className={commonClasses}>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        );
      
      case 'kinRelationship':
        return (
          <select name="kinRelationship" value={formData.kinRelationship} onChange={handleChange} className={commonClasses} required>
            <option value="">Select Relationship</option>
            <option value="Parent">Parent</option>
            <option value="Spouse">Spouse</option>
            <option value="Sibling">Sibling</option>
            <option value="Guardian">Guardian</option>
            <option value="Other">Other</option>
          </select>
        );
      
      case 'howDidYouHear':
        return (
          <select name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange} className={commonClasses}>
            <option value="">Select Option</option>
            <option value="Website">Website</option>
            <option value="Social Media">Social Media</option>
            <option value="Friend/Family">Friend/Family</option>
            <option value="School Visit">School Visit</option>
            <option value="Advertisement">Advertisement</option>
            <option value="Other">Other</option>
          </select>
        );
      
      case 'otherQualifications':
        // This is now handled separately in the Educational Background section
        return null;
      
      case 'disabilities':
      case 'medicalConditions':
        return (
          <textarea
            name={fieldName}
            value={formData[fieldName]}
            onChange={handleChange}
            className={commonClasses}
            rows={3}
            placeholder="Please specify if any"
          />
        );
      
      case 'declaration':
        return (
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="declaration"
              checked={formData.declaration}
              onChange={handleChange}
              className="mt-1 w-5 h-5 text-[#3d4d6f] border-gray-300 rounded focus:ring-[#3d4d6f]"
              required
            />
            <label className="text-sm text-gray-700">
              I declare that the information provided in this application is true and correct to the best of my knowledge. 
              I understand that providing false information may result in the rejection of my application or dismissal from the institution.
            </label>
          </div>
        );
      
      case 'dateOfBirth':
        return (
          <input
            type="date"
            name={fieldName}
            value={formData[fieldName]}
            onChange={handleChange}
            className={commonClasses}
            required
          />
        );
      
      case 'email':
        return (
          <input
            type="email"
            name={fieldName}
            value={formData[fieldName]}
            onChange={handleChange}
            className={commonClasses}
            required
            placeholder="your.email@example.com"
          />
        );
      
      case 'phone':
      case 'alternativePhone':
      case 'kinPhone':
        return (
          <input
            type="tel"
            name={fieldName}
            value={formData[fieldName]}
            onChange={handleChange}
            className={commonClasses}
            required={fieldName === 'phone' || fieldName === 'kinPhone'}
            placeholder="+256 XXX XXXXXX"
          />
        );
      
      default:
        return (
          <input
            type="text"
            name={fieldName}
            value={formData[fieldName]}
            onChange={handleChange}
            className={commonClasses}
            required={!['otherNames', 'alternativePhone', 'employer', 'position', 'yearsOfExperience', 'disabilities', 'medicalConditions', 'howDidYouHear', 'programmeChoice2'].includes(fieldName)}
          />
        );
    }
  };

  const getFieldLabel = (fieldName: string) => {
    const labels: Record<string, string> = {
      surname: 'Surname',
      givenName: 'Given Name',
      otherNames: 'Other Names',
      dateOfBirth: 'Date of Birth',
      gender: 'Gender',
      nationality: 'Nationality',
      nationalId: 'National ID / Passport Number',
      placeOfBirth: 'Place of Birth',
      email: 'Email Address',
      phone: 'Phone Number',
      alternativePhone: 'Alternative Phone Number',
      postalAddress: 'Postal Address',
      district: 'District',
      village: 'Village/Town',
      programmeType: 'Programme Type',
      programmeChoice1: 'First Choice Programme',
      programmeChoice2: 'Second Choice Programme (Optional)',
      studyMode: 'Preferred Study Mode',
      intakeSession: 'Preferred Intake',
      olevelSchool: 'O-Level School',
      olevelYear: 'O-Level Year of Completion',
      olevelGrade: 'O-Level Grade/Division',
      alevelSchool: 'A-Level School',
      alevelYear: 'A-Level Year of Completion',
      alevelGrade: 'A-Level Grade/Points',
      otherQualifications: 'Other Qualifications',
      currentEmployment: 'Currently Employed?',
      employer: 'Employer Name',
      position: 'Position/Title',
      yearsOfExperience: 'Years of Experience',
      kinName: 'Next of Kin Full Name',
      kinRelationship: 'Relationship',
      kinPhone: 'Next of Kin Phone Number',
      kinAddress: 'Next of Kin Address',
      disabilities: 'Disabilities (if any)',
      medicalConditions: 'Medical Conditions (if any)',
      howDidYouHear: 'How did you hear about LGIHE?',
      declaration: 'Declaration',
    };
    return labels[fieldName] || fieldName;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-green-600 text-white p-6 rounded-t-lg">
              <div className="flex items-center gap-3">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h2 className="text-2xl font-bold">Application Submitted Successfully!</h2>
                  <p className="text-green-100">Check your email for confirmation and next steps</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h3 className="font-bold text-blue-900 mb-2">📧 Check Your Email</h3>
                <p className="text-blue-800 text-sm">
                  We've sent a confirmation email to <strong>{formData.email}</strong> with detailed instructions on the next steps.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Required Documents to Submit
                </h3>
                <ul className="space-y-2 text-sm text-yellow-900">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span><strong>Application Fee Payment Slip</strong> (UGX 50,000)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span>Certified copies of O-Level certificates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span>Certified copies of A-Level certificates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span>Copy of National ID or Passport</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span>Two recent passport-size photographs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span>Birth certificate (certified copy)</span>
                  </li>
                  {formData.otherQualifications.length > 0 && (
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 font-bold">•</span>
                      <span>Copies of other qualifications</span>
                    </li>
                  )}
                  {formData.currentEmployment === 'yes' && (
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 font-bold">•</span>
                      <span>Letter from current employer</span>
                    </li>
                  )}
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-900 mb-2">💰 Payment Details</h3>
                <div className="text-sm text-green-800 space-y-1">
                  <p><strong>Amount:</strong> UGX 50,000</p>
                  <p><strong>Bank:</strong> Stanbic Bank Uganda</p>
                  <p><strong>Account Name:</strong> Luigi Giussani Institute of Higher Education</p>
                  <p><strong>Account Number:</strong> 9030006791234</p>
                  <p className="text-red-600 font-bold mt-2">⚠️ Keep your payment slip for submission!</p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">📍 Submit Documents To:</h3>
                <div className="text-sm text-gray-700">
                  <p className="font-semibold">Luigi Giussani Institute of Higher Education</p>
                  <p>Admissions Office</p>
                  <p>Sentamu Road 822-829, Luzira</p>
                  <p>Along Port Bell Road, Kampala</p>
                  <p className="mt-2"><strong>Office Hours:</strong> Mon-Fri: 8:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-bold text-blue-900 mb-2">📞 Need Help?</h3>
                <div className="text-sm text-blue-800">
                  <p><strong>Email:</strong> ar@lgihe.ac.ug</p>
                  <p><strong>Phone:</strong> (+256) 414 222 517</p>
                </div>
              </div>

              <button
                onClick={() => window.location.reload()}
                className="w-full bg-[#3d4d6f] text-white px-6 py-3 rounded-lg hover:bg-[#2f3d57] transition-colors font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#3d4d6f]">Application Form</h2>
          {savedMessage && (
            <span className="text-sm text-green-600 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {savedMessage}
            </span>
          )}
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-[#3d4d6f] h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
          />
        </div>
        
        <div className="flex justify-between text-xs text-gray-600">
          {sections.map((section, index) => (
            <span 
              key={index}
              className={`${index === currentSection ? 'font-bold text-[#3d4d6f]' : ''}`}
            >
              {index + 1}. {section.title}
            </span>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Current Section */}
        <div className="space-y-4 mb-6">
          <h3 className="text-xl font-semibold text-[#3d4d6f] mb-4">
            {sections[currentSection].title}
          </h3>
          
          {currentSection === 0 ? (
            // Personal Information Section with custom layout
            <>
              {/* Row 1: Surname, Given Name, Other Names */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['surname', 'givenName', 'otherNames'].map((fieldName) => (
                  <div key={fieldName}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {getFieldLabel(fieldName)}
                      {fieldName !== 'otherNames' && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    {renderField(fieldName as keyof FormData)}
                  </div>
                ))}
              </div>
              
              {/* Row 2: Date of Birth, Gender, Nationality */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['dateOfBirth', 'gender', 'nationality'].map((fieldName) => (
                  <div key={fieldName}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {getFieldLabel(fieldName)}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    {renderField(fieldName as keyof FormData)}
                  </div>
                ))}
              </div>
              
              {/* Row 3: National ID/Passport, Place of Birth */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['nationalId', 'placeOfBirth'].map((fieldName) => (
                  <div key={fieldName}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {getFieldLabel(fieldName)}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    {renderField(fieldName as keyof FormData)}
                  </div>
                ))}
              </div>
            </>
          ) : currentSection === 1 ? (
            // Contact Information Section with 3 columns per row
            <>
              {/* Row 1: Email, Phone, Alternative Phone */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['email', 'phone', 'alternativePhone'].map((fieldName) => (
                  <div key={fieldName}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {getFieldLabel(fieldName)}
                      {fieldName !== 'alternativePhone' && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    {renderField(fieldName as keyof FormData)}
                  </div>
                ))}
              </div>
              
              {/* Row 2: Postal Address, District, Village */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['postalAddress', 'district', 'village'].map((fieldName) => (
                  <div key={fieldName}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {getFieldLabel(fieldName)}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    {renderField(fieldName as keyof FormData)}
                  </div>
                ))}
              </div>
            </>
          ) : currentSection === 3 ? (
            // Educational Background Section with collapsible sections
            <>
              {/* O-Level Section */}
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setShowOLevel(!showOLevel)}
                  className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors"
                >
                  <span className="font-semibold text-gray-700">O-Level Education</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${showOLevel ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showOLevel && (
                  <div className="p-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        O-Level School <span className="text-red-500 ml-1">*</span>
                      </label>
                      {renderField('olevelSchool')}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Year of Completion <span className="text-red-500 ml-1">*</span>
                        </label>
                        {renderField('olevelYear')}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Grade/Division <span className="text-red-500 ml-1">*</span>
                        </label>
                        {renderField('olevelGrade')}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* A-Level Section */}
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setShowALevel(!showALevel)}
                  className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors"
                >
                  <span className="font-semibold text-gray-700">A-Level Education</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${showALevel ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showALevel && (
                  <div className="p-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        A-Level School <span className="text-red-500 ml-1">*</span>
                      </label>
                      {renderField('alevelSchool')}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Year of Completion <span className="text-red-500 ml-1">*</span>
                        </label>
                        {renderField('alevelYear')}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Grade/Points <span className="text-red-500 ml-1">*</span>
                        </label>
                        {renderField('alevelGrade')}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Other Qualifications Section */}
              <div className="border border-gray-300 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-gray-700">Other Qualifications</h4>
                  <button
                    type="button"
                    onClick={addOtherQualification}
                    className="px-4 py-2 bg-[#3d4d6f] text-white text-sm rounded-lg hover:bg-[#2f3d57] transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Qualification
                  </button>
                </div>

                {formData.otherQualifications.length === 0 ? (
                  <p className="text-sm text-gray-500 text-center py-4">
                    No other qualifications added. Click "Add Qualification" to add certifications, diplomas, or other training.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {formData.otherQualifications.map((qual, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm font-medium text-gray-600">Qualification {index + 1}</span>
                          <button
                            type="button"
                            onClick={() => removeOtherQualification(index)}
                            className="text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Remove
                          </button>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Qualification Title <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                              type="text"
                              value={qual.title}
                              onChange={(e) => updateOtherQualification(index, 'title', e.target.value)}
                              className={commonClasses}
                              placeholder="e.g., Certificate in Computer Science"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Institution <span className="text-red-500 ml-1">*</span>
                              </label>
                              <input
                                type="text"
                                value={qual.institution}
                                onChange={(e) => updateOtherQualification(index, 'institution', e.target.value)}
                                className={commonClasses}
                                placeholder="e.g., Makerere University"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Year of Attainment <span className="text-red-500 ml-1">*</span>
                              </label>
                              <input
                                type="text"
                                value={qual.year}
                                onChange={(e) => updateOtherQualification(index, 'year', e.target.value)}
                                className={commonClasses}
                                placeholder="e.g., 2020"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            // Other sections keep default layout
            sections[currentSection].fields.map((fieldName) => (
              <div key={fieldName}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {getFieldLabel(fieldName)}
                  {!['otherNames', 'alternativePhone', 'employer', 'position', 'yearsOfExperience', 'disabilities', 'medicalConditions', 'howDidYouHear', 'programmeChoice2'].includes(fieldName) && 
                    <span className="text-red-500 ml-1">*</span>
                  }
                </label>
                {renderField(fieldName as keyof FormData)}
              </div>
            ))
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-6 border-t">
          <div>
            {currentSection > 0 && (
              <button
                type="button"
                onClick={() => setCurrentSection(prev => prev - 1)}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Previous
              </button>
            )}
          </div>
          
          <div className="flex gap-3">
            <button
              type="button"
              onClick={clearDraft}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
            >
              Clear Draft
            </button>
            
            {currentSection < sections.length - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentSection(prev => prev + 1)}
                className="px-6 py-2 bg-[#3d4d6f] text-white rounded-lg hover:bg-[#2f3d57] transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
