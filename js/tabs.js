// Feature Tabs Logic for GstockDzPos

const featuresData = {
    cashier: [
        {
            icon: "fas fa-barcode",
            title: "دعم الباركود",
            desc: "بيع سريع باستخدام قارئ الباركود للأصناف والأسعار."
        },
        {
            icon: "fas fa-pause-circle",
            title: "تعليق البيع",
            desc: "إمكانية تعليق معاملة بيع مؤقتاً لخدمة عميل آخر والعودة لها."
        },
        {
            icon: "fas fa-receipt",
            title: "طابعات حرارية",
            desc: "دعم كامل لطابعات الإيصالات بجميع أحجامها (58mm/80mm)."
        }
    ],
    manager: [
        {
            icon: "fas fa-network-wired",
            title: "العمل عبر الشبكة",
            desc: "نظام Client/Server لربط عدة أجهزة كاشير بقاعدة بيانات واحدة (Pro)."
        },
        {
            icon: "fas fa-boxes",
            title: "تنبيهات المخزون",
            desc: "تلقي إشعارات فورية عند وصول المنتجات للحد الأدنى."
        },
        {
            icon: "fas fa-users-cog",
            title: "صلاحيات المستخدمين",
            desc: "تحكم كامل في صلاحيات الموظفين (Admin/User) وتتبع عملياتهم."
        }
    ],
    reports: [
        {
            icon: "fas fa-file-invoice",
            title: "تقارير احترافية",
            desc: "طباعة سندات الدخول والخروج بتصميم رسمي (JasperReports)."
        },
        {
            icon: "fas fa-chart-pie",
            title: "إحصائيات المبيعات",
            desc: "رسوم بيانية توضح الأصناف الأكثر مبيعاً والأرباح المحققة."
        },
        {
            icon: "fas fa-file-excel",
            title: "تصدير البيانات",
            desc: "إمكانية تصدير قوائم المخزون والمبيعات إلى ملفات Excel."
        }
    ]
};

function switchTab(tabId) {
    const container = document.getElementById("tab-content");
    const data = featuresData[tabId];

    if (!container) return;

    // UI Updates
    document.querySelectorAll("#features button").forEach((b) => {
        b.classList.remove("active-tab");
        b.classList.add("text-slate-400");
        b.classList.remove("text-blue-600"); 
        b.classList.remove("border-b-2");
        b.classList.remove("border-blue-600");
    });

    const activeTab = document.getElementById(`tab-${tabId}`);
    if (activeTab) {
        activeTab.classList.add("active-tab");
        activeTab.classList.remove("text-slate-400");
        activeTab.classList.add("text-blue-600");
        activeTab.classList.add("border-b-2");
        activeTab.classList.add("border-blue-600");
    }

    // Render
    container.innerHTML = data
        .map(
            (f, index) => `
        <div class="scroll-reveal bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all transform hover:-translate-y-1" style="transition-delay: ${index * 100}ms">
            <div class="text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-6 bg-blue-50">
                <i class="${f.icon}"></i>
            </div>
            <h4 class="text-xl font-bold mb-3 text-slate-800">${f.title}</h4>
            <p class="text-slate-600 leading-relaxed font-medium">${f.desc}</p>
        </div>
    `
        )
        .join("");

    // Trigger animations
    if (typeof initScrollReveal === 'function') {
         setTimeout(initScrollReveal, 100);
    } else {
         const revealElements = container.querySelectorAll(".scroll-reveal");
         setTimeout(() => {
            revealElements.forEach(el => el.classList.add("revealed"));
         }, 50);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    switchTab("cashier");
});
