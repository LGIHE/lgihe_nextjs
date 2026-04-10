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
  otherQualifications: string;
  
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
    otherQualifications: '',
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
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.declaration) {
      alert('Please accept the declaration to submit your application');
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Submitting application:', formData);
    alert('Application submitted successfully! You will receive a confirmation email shortly.');
    
    // Clear saved draft
    localStorage.removeItem(STORAGE_KEY);
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
    { title: 'Educational Background', fields: ['olevelSchool', 'olevelYear', 'olevelGrade', 'alevelSchool', 'alevelYear', 'alevelGrade', 'otherQualifications'] },
    { title: 'Employment & Next of Kin', fields: ['currentEmployment', 'employer', 'position', 'yearsOfExperience', 'kinName', 'kinRelationship', 'kinPhone', 'kinAddress'] },
    { title: 'Additional Information & Declaration', fields: ['disabilities', 'medicalConditions', 'howDidYouHear', 'declaration'] },
  ];

  const renderField = (fieldName: keyof FormData) => {
    const commonClasses = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B6F8C] focus:border-transparent";
    
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
        return (
          <select name={fieldName} value={formData[fieldName]} onChange={handleChange} className={commonClasses} required={fieldName === 'programmeChoice1'}>
            <option value="">Select Programme</option>
            <optgroup label="Certificate Programmes">
              <option value="Certificate in Early Childhood Care and Education">Certificate in Early Childhood Care and Education</option>
              <option value="Certificate in Child Care and Development">Certificate in Child Care and Development</option>
            </optgroup>
            <optgroup label="Diploma Programmes">
              <option value="Diploma in Pre-Primary Education">Diploma in Pre-Primary Education</option>
              <option value="Diploma in Primary Education">Diploma in Primary Education</option>
              <option value="Diploma in Educational Leadership and Management">Diploma in Educational Leadership and Management</option>
            </optgroup>
            <optgroup label="Bachelor's Programmes">
              <option value="Bachelor of Pre-Primary Education">Bachelor of Pre-Primary Education</option>
              <option value="Bachelor of Primary Education">Bachelor of Primary Education</option>
              <option value="Bachelor of Arts with Education (Secondary)">Bachelor of Arts with Education (Secondary)</option>
              <option value="Bachelor of Science with Education (Secondary)">Bachelor of Science with Education (Secondary)</option>
            </optgroup>
            <optgroup label="Postgraduate Programmes">
              <option value="Postgraduate Diploma in Primary Education">Postgraduate Diploma in Primary Education</option>
              <option value="Postgraduate Diploma in Educational Leadership and Management">Postgraduate Diploma in Educational Leadership and Management</option>
            </optgroup>
          </select>
        );
      
      case 'studyMode':
        return (
          <select name="studyMode" value={formData.studyMode} onChange={handleChange} className={commonClasses} required>
            <option value="">Select Study Mode</option>
            <option value="Day">Day Programme</option>
            <option value="Weekend">Weekend Programme</option>
            <option value="Holiday">Holiday Programme</option>
            <option value="Session">Session-based Programme</option>
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
      case 'disabilities':
      case 'medicalConditions':
        return (
          <textarea
            name={fieldName}
            value={formData[fieldName]}
            onChange={handleChange}
            className={commonClasses}
            rows={3}
            placeholder={fieldName === 'otherQualifications' ? 'List any other qualifications, certifications, or training' : 'Please specify if any'}
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
              className="mt-1 w-5 h-5 text-[#5B6F8C] border-gray-300 rounded focus:ring-[#5B6F8C]"
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
      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#5B6F8C]">Application Form</h2>
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
            className="bg-[#5B6F8C] h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
          />
        </div>
        
        <div className="flex justify-between text-xs text-gray-600">
          {sections.map((section, index) => (
            <span 
              key={index}
              className={`${index === currentSection ? 'font-bold text-[#5B6F8C]' : ''}`}
            >
              {index + 1}. {section.title}
            </span>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Current Section */}
        <div className="space-y-4 mb-6">
          <h3 className="text-xl font-semibold text-[#5B6F8C] mb-4">
            {sections[currentSection].title}
          </h3>
          
          {sections[currentSection].fields.map((fieldName) => (
            <div key={fieldName}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {getFieldLabel(fieldName)}
                {!['otherNames', 'alternativePhone', 'employer', 'position', 'yearsOfExperience', 'disabilities', 'medicalConditions', 'howDidYouHear', 'programmeChoice2'].includes(fieldName) && 
                  <span className="text-red-500 ml-1">*</span>
                }
              </label>
              {renderField(fieldName as keyof FormData)}
            </div>
          ))}
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
                className="px-6 py-2 bg-[#5B6F8C] text-white rounded-lg hover:bg-[#4A5D75] transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Submit Application
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
