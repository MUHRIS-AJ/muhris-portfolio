import { cn } from "@/lib/utils";

const GlassCard = ({ children, className, hoverEffect = true }) => {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-[2.5rem] border border-white/40 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-[40px]",
                "shadow-[0_20px_50px_rgba(31,38,135,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]",
                hoverEffect && "transition-all duration-500 hover:bg-white/60 dark:hover:bg-slate-800/60 hover:shadow-[0_30px_60px_rgba(31,38,135,0.1)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] hover:-translate-y-2",
                className
            )}
        >
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/5 dark:from-white/2 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default GlassCard;
