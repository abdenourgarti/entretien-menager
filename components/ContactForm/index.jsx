import React, { useState } from 'react';
import { useFormik } from 'formik';
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

  const environmentOptions = [
    { icon: Home, label: 'Maison', value: 'maison' },
    { icon: Building2, label: 'Bureau', value: 'bureau' },
    { icon: Store, label: 'Commerce', value: 'commerce' },
    { icon: Hotel, label: 'Clinique', value: 'clinique' },
    { icon: GraduationCap, label: 'École', value: 'ecole' },
    { icon: Warehouse, label: 'Entrepôt', value: 'entrepot' },
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
        errors.firstName = 'Le prénom est requis';
      }
      
      if (!values.lastName) {
        errors.lastName = 'Le nom est requis';
      }
      
      if (!values.email) {
        errors.email = 'L\'email est requis';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Adresse email invalide';
      }
      
      if (!values.phone) {
        errors.phone = 'Le numéro de téléphone est requis';
      } else if (!/^\+?[1-9]\d{1,14}$/.test(values.phone.replace(/\s+/g, ''))) {
        errors.phone = 'Numéro de téléphone invalide';
      }
      
      if (!values.environment) {
        errors.environment = 'Veuillez choisir un environnement';
      }
      
      if (!values.contactType) {
        errors.contactType = 'Veuillez choisir un type de contact';
      }
      
      if (values.contactType === 'rendez-vous' && !values.date) {
        errors.date = 'La date est requise pour un rendez-vous';
      }

      return errors;
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log('Formulaire soumis:', values);
      setTimeout(() => {
        setSubmitting(false);
        resetForm();
        alert('Message envoyé avec succès!');
      }, 1000);
    },
  });

  const handleContactTypeChange = (e) => {
    formik.handleChange(e);
    setShowDateField(e.target.value === 'rendez-vous');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Contactez-nous</h2>
        
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Prénom */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Prénom
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

            {/* Nom */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Nom
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
                  Email
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

            {/* Téléphone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Téléphone
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

          {/* Type d'environnement */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Vous êtes ?
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

          {/* Type de contact */}
          <div>
            <label htmlFor="contactType" className="block text-sm font-medium text-gray-700 mb-1">
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Type de contact
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
              <option value="">Sélectionnez un type</option>
              <option value="renseignement">Se renseigner</option>
              <option value="devis">Obtenir un devis</option>
              <option value="rendez-vous">Prendre rendez-vous</option>
            </select>
            {formik.touched.contactType && formik.errors.contactType && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.contactType}</div>
            )}
          </div>

          {/* Date (conditionnelle) */}
          {showDateField && (
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Date souhaitée
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
                Message
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

          {/* Bouton d'envoi */}
          <div className="text-center">
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {formik.isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </div>
        </form>
      </div>

      {/* Section Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Email */}
        <div className="bg-blue-600 rounded-lg p-6 text-white text-center">
          <Mail className="w-8 h-8 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p>info@ipropre.ca</p>
        </div>

        {/* Téléphone */}
        <div className="bg-blue-600 rounded-lg p-6 text-white text-center">
          <Phone className="w-8 h-8 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
          <p>+1 819-995-2414</p>
        </div>

        {/* Adresse */}
        <div className="bg-blue-600 rounded-lg p-6 text-white text-center">
          <MapPin className="w-8 h-8 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Adresse</h3>
          <p>3085 A. Jean-Noël-Lavoie Bureau 202, Laval, QC H7P 4W5, Canada</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;