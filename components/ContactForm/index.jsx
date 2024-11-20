import React, { useState } from 'react';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { useTranslations } from 'next-intl';
import { 
  Calendar, 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  Home, 
  Building, 
  GraduationCap,
  Hotel,
  Warehouse,
  Store,
  User,
  MessageCircle,
  MessageSquare
} from 'lucide-react';

const EnvironmentOption = ({ icon: Icon, label, value, checked, onChange, name }) => (
  <label className="relative flex flex-col items-center gap-2 cursor-pointer">
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="sr-only peer"
    />
    <div className="w-full p-4 bg-white border-2 rounded-lg peer-checked:border-blue-600 peer-checked:bg-blue-50 transition-all hover:bg-gray-50">
      <div className="flex flex-col items-center">
        <Icon className={`w-8 h-8 ${checked ? 'text-blue-600' : 'text-gray-500'}`} />
        <span className={`mt-2 text-sm font-medium ${checked ? 'text-blue-600' : 'text-gray-700'}`}>
          {label}
        </span>
      </div>
    </div>
  </label>
);

const ContactForm = () => {
  const [showDateField, setShowDateField] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const t = useTranslations('contact');

  const environmentOptions = [
    { icon: Home, label: t('environment.house'), value: 'house' },
    { icon: Building2, label: t('environment.office'), value: 'office' },
    { icon: Store, label: t('environment.commerce'), value: 'commerce' },
    { icon: Hotel, label: t('environment.clinic'), value: 'clinic' },
    { icon: GraduationCap, label: t('environment.school'), value: 'school' },
    { icon: Warehouse, label: t('environment.warehouse'), value: 'warehouse' },
  ];

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      environment: '',
      contactType: '',
      date: '',
      message: ''
    },
    validate: values => {
      const errors = {};
      
      if (!values.firstName) {
        errors.firstName = t('validation.firstName');
      }
      
      if (!values.lastName) {
        errors.lastName = t('validation.lastName');
      }
      
      if (!values.email) {
        errors.email = t('validation.email.required');
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = t('validation.email.invalid');
      }
      
      if (!values.phone) {
        errors.phone = t('validation.phone.required');
      } else if (!/^\+?[1-9]\d{1,14}$/.test(values.phone.replace(/\s+/g, ''))) {
        errors.phone = t('validation.phone.invalid');
      }
      
      if (!values.environment) {
        errors.environment = t('validation.environment');
      }
      
      if (!values.contactType) {
        errors.contactType = t('validation.contactType');
      }
      
      if (values.contactType === 'appointment' && !values.date) {
        errors.date = t('validation.date');
      }

      return errors;
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitStatus('pending');
        
        // Préparer les données pour Formspree
        const formData = new FormData();
        formData.append('firstName', values.firstName);
        formData.append('lastName', values.lastName);
        formData.append('email', values.email);
        formData.append('phone', values.phone);
        formData.append('environment', values.environment);
        formData.append('contactType', values.contactType);
        formData.append('date', values.date || 'N/A');
        formData.append('message', values.message);

        const response = await fetch("https://formspree.io/f/mnnqzgbg", {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        const result = await response.json();
        
        if (response.ok) {
          Swal.fire({
            title: t('success'),
            text: t('successDetails'),
            icon: "success",
            confirmButtonText: t('close'),
            confirmButtonColor: '#3B82F6'
          });
          setSubmitStatus('success');
          resetForm();
          setTimeout(() => setSubmitStatus(''), 5000);
        } else {
          setSubmitStatus('error');
          console.error('Erreur lors de l\'envoi:', result);
        }
      } catch (error) {
        setSubmitStatus('error');
        console.error('Erreur lors de l\'envoi:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleContactTypeChange = (e) => {
    formik.handleChange(e);
    setShowDateField(e.target.value === 'appointment');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mb-24">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">{t('title')}</h2>
        
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {t('firstName')}
                </span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {t('lastName')}
                </span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {t('email')}
                </span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {t('phone')}
                </span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
              )}
            </div>
          </div>

          {/* Environment Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              {t('environment.title')}
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {environmentOptions.map((option) => (
                <EnvironmentOption
                  key={option.value}
                  icon={option.icon}
                  label={option.label}
                  value={option.value}
                  checked={formik.values.environment === option.value}
                  onChange={formik.handleChange}
                  name="environment"
                />
              ))}
            </div>
            {formik.touched.environment && formik.errors.environment && (
              <div className="text-red-500 text-sm mt-2">{formik.errors.environment}</div>
            )}
          </div>

          {/* Contact Type */}
          <div>
            <label htmlFor="contactType" className="block text-sm font-medium text-gray-700 mb-1">
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                {t('contactType.label')}
              </span>
            </label>
            <select
              id="contactType"
              name="contactType"
              onChange={handleContactTypeChange}
              onBlur={formik.handleBlur}
              value={formik.values.contactType}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">{t('contactType.select')}</option>
              <option value="inquiry">{t('contactType.inquiry')}</option>
              <option value="quote">{t('contactType.quote')}</option>
              <option value="appointment">{t('contactType.appointment')}</option>
            </select>
            {formik.touched.contactType && formik.errors.contactType && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.contactType}</div>
            )}
          </div>

          {/* Date (conditional) */}
          {showDateField && (
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {t('preferredDate')}
                </span>
              </label>
              <input
                id="date"
                name="date"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {formik.touched.date && formik.errors.date && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.date}</div>
              )}
            </div>
          )}

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              <span className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                {t('message')}
              </span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={formik.isSubmitting || submitStatus === 'pending'}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {submitStatus === 'pending' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t('sending')}
                </>
              ) : t('submit')}
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
              {t('success')}
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
              {t('error')}
            </div>
          )}
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-blue-600 rounded-lg p-6 text-white text-center">
          <Mail className="w-8 h-8 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t('contactInfo.email.title')}</h3>
          <p>{t('contactInfo.email.value')}</p>
        </div>

        <div className="bg-blue-600 rounded-lg p-6 text-white text-center">
          <Phone className="w-8 h-8 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t('contactInfo.phone.title')}</h3>
          <p>{t('contactInfo.phone.value')}</p>
        </div>

        <div className="bg-blue-600 rounded-lg p-6 text-white text-center">
          <MapPin className="w-8 h-8 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t('contactInfo.address.title')}</h3>
          <p>{t('contactInfo.address.value')}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;